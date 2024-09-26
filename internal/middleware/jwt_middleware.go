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
