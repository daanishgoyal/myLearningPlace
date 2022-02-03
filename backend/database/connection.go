package database

import (
	"Sprint1/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:logmein1@/Backend"), &gorm.Config{})

	if err != nil {
		panic("cannot connect to databse")
	}
	DB = connection

	connection.AutoMigrate(&models.User{})
}
