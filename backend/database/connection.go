package database

import (
	"backend/config"
	"backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
)

// DB Connection global object

var DB *gorm.DB

func Connect() {

	// Added Params to parse time and set local time

	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName + "?parseTime=True&loc=Local"
	log.Println(dsn)
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: logger.Default.LogMode(logger.Info)})

	if err != nil {
		panic("Can't connect DB")
	} else {
		println("Connection successful!")
	}

	DB = connection

	err = connection.AutoMigrate(
		&models.User{},
		&models.Teacher{},
		&models.Skill{},
		&models.Relation_t_s{},
		&models.Comments{},
		&models.MiscImages{},
		&models.Slot{},
		&models.Booking{})

	if err != nil {
		return
	}

	//TODO: AUTOCREATE DB
	//PopulateDB()

}
