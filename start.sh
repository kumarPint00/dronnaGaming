#!/bin/bash

# Project root
PROJECT_ROOT="dronnaGaming"
mkdir -p $PROJECT_ROOT/cmd
mkdir -p $PROJECT_ROOT/internal/{auth,cache,config,controllers,database,models,schedules,services,storage,middleware,logging}

# Create files in cmd
cat > $PROJECT_ROOT/cmd/main.go <<EOL
package main

import (
    "log"
    "github.com/gofiber/fiber/v2"
    "github.com/kumarpint00/dronnaGaming/internal/database"
    "github.com/kumarpint00/dronnaGaming/internal/config"
    "github.com/kumarpint00/dronnaGaming/internal/middleware"
    "github.com/kumarpint00/dronnaGaming/internal/controllers"
    "github.com/kumarpint00/dronnaGaming/internal/schedules"
)

func main() {
    config.Load()
    database.ConnectMongoDB()
    database.ConnectRedis()
    app := fiber.New()
    app.Use(middleware.JWTProtected())
    app.Post("/auth/login", controllers.Login)
    app.Post("/auth/signup", controllers.SignUp)
    api := app.Group("/api", middleware.JWTProtected())
    api.Get("/leaderboard", controllers.GetLeaderboard)
    api.Post("/game/move", controllers.GameMove)
    api.Get("/game/history", controllers.GameHistory)
    app.Post("/upload", controllers.UploadFile)
    app.Get("/download/:filename", controllers.DownloadFile)
    go schedules.StartCronJobs()
    log.Fatal(app.Listen(":8080"))
}
EOL

# Create files for auth
cat > $PROJECT_ROOT/internal/auth/auth.go <<EOL
package auth

import (
    "time"
    "github.com/dgrijalva/jwt-go"
)

var jwtSecret = []byte("your-secret-key")

type Claims struct {
    Username string \`json:"username"\`
    jwt.StandardClaims
}

func GenerateJWT(username string) (string, error) {
    expirationTime := time.Now().Add(24 * time.Hour)
    claims := &Claims{
        Username: username,
        StandardClaims: jwt.StandardClaims{
            ExpiresAt: expirationTime.Unix(),
        },
    }
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString(jwtSecret)
}

func ValidateJWT(tokenStr string) (*Claims, error) {
    claims := &Claims{}
    token, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
        return jwtSecret, nil
    })
    if err != nil || !token.Valid {
        return nil, err
    }
    return claims, nil
}
EOL

# Create files for Redis cache
cat > $PROJECT_ROOT/internal/cache/redis.go <<EOL
package database

import (
    "github.com/go-redis/redis/v8"
    "log"
    "context"
)

var RedisClient *redis.Client

func ConnectRedis() {
    RedisClient = redis.NewClient(&redis.Options{
        Addr: "localhost:6379",
        Password: "",
        DB: 0,
    })
    _, err := RedisClient.Ping(context.Background()).Result()
    if err != nil {
        log.Fatal("Failed to connect to Redis:", err)
    }
    log.Println("Connected to Redis!")
}
EOL

# Create MongoDB connection setup
cat > $PROJECT_ROOT/internal/database/mongodb.go <<EOL
package database

import (
    "context"
    "log"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var MongoClient *mongo.Client

func ConnectMongoDB() {
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    err = client.Ping(context.TODO(), nil)
    if err != nil {
        log.Fatal(err)
    }
    MongoClient = client
    log.Println("Connected to MongoDB!")
}
EOL

# Create JWT middleware
cat > $PROJECT_ROOT/internal/middleware/jwt_middleware.go <<EOL
package middleware

import (
    "github.com/gofiber/fiber/v2"
    "github.com/kumarpint00/dronnaGaming/internal/auth"
)

func JWTProtected() fiber.Handler {
    return func(c *fiber.Ctx) error {
        token := c.Get("Authorization")
        if token == "" {
            return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
                "error": "Unauthorized",
            })
        }
        claims, err := auth.ValidateJWT(token)
        if err != nil {
            return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
                "error": "Invalid or expired token",
            })
        }
        c.Locals("username", claims.Username)
        return c.Next()
    }
}
EOL

# Create logging setup
cat > $PROJECT_ROOT/internal/logging/logger.go <<EOL
package logging

import (
    "go.uber.org/zap"
)

var Logger *zap.Logger

func InitializeLogger() {
    var err error
    Logger, err = zap.NewProduction()
    if err != nil {
        panic(err)
    }
}

func Info(message string, fields ...zap.Field) {
    Logger.Info(message, fields...)
}

func Error(message string, fields ...zap.Field) {
    Logger.Error(message, fields...)
}
EOL

# Create scheduler (cron jobs)
cat > $PROJECT_ROOT/internal/schedules/cron_jobs.go <<EOL
package schedules

import (
    "log"
    "time"
    "github.com/robfig/cron/v3"
)

func StartCronJobs() {
    c := cron.New()
    c.AddFunc("@every 10m", func() {
        UpdateLeaderboard()
    })
    c.Start()
    select {}
}

func UpdateLeaderboard() {
    log.Println("Leaderboard updated at", time.Now())
}
EOL

# Create file upload/download logic
cat > $PROJECT_ROOT/internal/storage/file_service.go <<EOL
package storage

import (
    "io"
    "os"
    "path/filepath"
    "github.com/gofiber/fiber/v2"
)

func UploadFile(c *fiber.Ctx) error {
    file, err := c.FormFile("file")
    if err != nil {
        return c.Status(fiber.StatusBadRequest).SendString("Failed to upload file")
    }
    uploadPath := filepath.Join("./uploads", file.Filename)
    err = c.SaveFile(file, uploadPath)
    if err != nil {
        return c.Status(fiber.StatusInternalServerError).SendString("Failed to save file")
    }
    return c.SendString("File uploaded successfully")
}

func DownloadFile(c *fiber.Ctx) error {
    filename := c.Params("filename")
    filePath := filepath.Join("./uploads", filename)
    file, err := os.Open(filePath)
    if err != nil {
        return c.Status(fiber.StatusNotFound).SendString("File not found")
    }
    defer file.Close()
    return c.SendStream(file)
}
EOL

# Create Dockerfile
cat > $PROJECT_ROOT/Dockerfile <<EOL
FROM golang:1.19-alpine
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o main .
EXPOSE 8080
CMD ["./main"]
EOL

# Create docker-compose.yml
cat > $PROJECT_ROOT/docker-compose.yml <<EOL
version: '3'
services:
  mongo:
    image: mongo:latest
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  redis:
    image: redis:alpine
    container_name: redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  app:
    build: .
    container_name: go_app
    ports:
      - "8080:8080"
    environment:
      - MONGO_URI=mongodb://mongo:27017
      - REDIS_URI=redis://redis:6379
    depends_on:
      - mongo
      - redis

volumes:
  mongo_data:
  redis_data:
EOL

echo "Project structure created!"
