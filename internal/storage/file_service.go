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
