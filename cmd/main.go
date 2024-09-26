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
