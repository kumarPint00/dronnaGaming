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
        bson.M{"": bson.M{"score": newScore}},
    )
    return err
}
