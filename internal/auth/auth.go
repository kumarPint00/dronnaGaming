package auth

import (
    "time"
    "github.com/dgrijalva/jwt-go"
)

var jwtSecret = []byte("your-secret-key")

type Claims struct {
    Username string `json:"username"`
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
