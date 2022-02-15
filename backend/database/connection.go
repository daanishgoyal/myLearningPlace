package database

import (
	"backend/config"
	"backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// DB Connection global object

var DB *gorm.DB

func Connect() {

	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: logger.Default.LogMode(logger.Info)})

	if err != nil {
		panic("Can't connect DB")
	} else {
		println("Connection successful!")
	}

	DB = connection

	connection.AutoMigrate(
		&models.User{},
		&models.Teacher{},
		&models.Skill{},
		&models.Relation_t_s{},
	)

	PopulateDB()
}
