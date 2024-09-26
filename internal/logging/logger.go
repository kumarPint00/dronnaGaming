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
