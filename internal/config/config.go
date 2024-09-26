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
