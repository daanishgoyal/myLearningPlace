package unittest

import (
	"backend/config"
	"backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"testing"
)

func TestGetSearchAttributes(t *testing.T) {

	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		t.Errorf("Connection to DB Failed")
	}

	DB := connection

	var skills []models.Skill
	var teachers []models.Teacher

	type Result struct {
		City string
	}

	var checkResult []Result

	query1 := DB.Select("City").Distinct().Find(&teachers).Scan(&checkResult)

	query2 := DB.Find(&skills)
	if query1.RowsAffected <= 0 && query2.RowsAffected <= 0 {
		t.Errorf("Search Attributes Not being Fetched from DB")
		t.Fail()
	}
}
