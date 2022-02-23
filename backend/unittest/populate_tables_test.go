package unittest

import (
	"backend/config"
	"backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"testing"
)

func TestPopulateTables(t *testing.T) {

	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		t.Errorf("Connection to DB Failed")
	}

	DB := connection

	var teachers []models.Teacher
	var users []models.User
	var skills []models.Skill
	var comments []models.Comments
	var relTS []models.Relation_t_s

	tableModels := []interface{}{teachers, users, skills, comments, relTS}
	table := []string{"Teachers", "User", "Skills", "Comments", "RelationTS"}

	for i := 0; i < len(tableModels); i++ {
		count := DB.Find(&tableModels[i])
		if count.RowsAffected <= 0 {
			t.Errorf("Table " + table[i] + " is empty. Please populate the tables first.")
		}
	}
}
