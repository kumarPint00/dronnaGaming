#!/bin/bash

# Project root
PROJECT_ROOT="./"

# Create any missing directories
mkdir -p $PROJECT_ROOT/internal/config
mkdir -p $PROJECT_ROOT/internal/controllers
mkdir -p $PROJECT_ROOT/internal/models
mkdir -p $PROJECT_ROOT/internal/services

# Create missing files only if they don't already exist

# Config setup (internal/config/config.go)
if [ ! -f "$PROJECT_ROOT/internal/config/config.go" ]; then
cat > $PROJECT_ROOT/internal/config/config.go <<EOL
package config

import (
    "log"
    "os"
)

var MongoURI string
var RedisURI string
var JwtSecret string

func Load() {
    MongoURI = getEnv("MONGO_URI", "mongodb://localhost:27017")
    RedisURI = getEnv("REDIS_URI", "redis://localhost:6379")
    JwtSecret = getEnv("JWT_SECRET", "your-secret-key")
}

func getEnv(key, defaultValue string) string {
    value, exists := os.LookupEnv(key)
    if !exists {
        return defaultValue
    }
    return value
}
EOL
    echo "Created config.go"
else
    echo "config.go already exists"
fi

# Controllers (internal/controllers/game_controller.go)
if [ ! -f "$PROJECT_ROOT/internal/controllers/game_controller.go" ]; then
cat > $PROJECT_ROOT/internal/controllers/game_controller.go <<EOL
package controllers

import "github.com/gofiber/fiber/v2"

func GameMove(c *fiber.Ctx) error {
    // Logic for processing a game move
    return c.SendString("Game move processed")
}

func GameHistory(c *fiber.Ctx) error {
    // Logic for retrieving game history
    return c.SendString("Game history retrieved")
}

func GetLeaderboard(c *fiber.Ctx) error {
    // Logic for retrieving the leaderboard
    return c.SendString("Leaderboard retrieved")
}
EOL
    echo "Created game_controller.go"
else
    echo "game_controller.go already exists"
fi

# Models (internal/models/user_model.go)
if [ ! -f "$PROJECT_ROOT/internal/models/user_model.go" ]; then
cat > $PROJECT_ROOT/internal/models/user_model.go <<EOL
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
    ID       primitive.ObjectID \`bson:"_id,omitempty"\`
    Username string             \`bson:"username"\`
    Password string             \`bson:"password"\`
    Email    string             \`bson:"email"\`
    Score    int                \`bson:"score"\`
}
EOL
    echo "Created user_model.go"
else
    echo "user_model.go already exists"
fi

# Services (internal/services/user_service.go)
if [ ! -f "$PROJECT_ROOT/internal/services/user_service.go" ]; then
cat > $PROJECT_ROOT/internal/services/user_service.go <<EOL
package services

import (
    "context"
    "github.com/kumarpint00/dronnaGaming/internal/models"
    "github.com/kumarpint00/dronnaGaming/internal/database"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo"
)

func CreateUser(user models.User) error {
    collection := database.MongoClient.Database("yourdb").Collection("users")
    _, err := collection.InsertOne(context.TODO(), user)
    return err
}

func GetUserByUsername(username string) (models.User, error) {
    collection := database.MongoClient.Database("yourdb").Collection("users")
    var user models.User
    err := collection.FindOne(context.TODO(), bson.M{"username": username}).Decode(&user)
    return user, err
}

func UpdateUserScore(userID primitive.ObjectID, newScore int) error {
    collection := database.MongoClient.Database("yourdb").Collection("users")
    _, err := collection.UpdateOne(context.TODO(),
        bson.M{"_id": userID},
        bson.M{"$set": bson.M{"score": newScore}},
    )
    return err
}
EOL
    echo "Created user_service.go"
else
    echo "user_service.go already exists"
fi

echo "Missing files and folders have been created!"
