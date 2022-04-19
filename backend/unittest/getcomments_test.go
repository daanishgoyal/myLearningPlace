package unittest

import (
	"backend/config"
	"backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"testing"
)

func TestGetComments(t *testing.T) {
	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		t.Errorf("Connection to DB Failed")
	}

	DB := connection

	var comments []models.Comments

	query := DB.Find(&comments)

	if query.RowsAffected <= 0 {
		t.Errorf("No comments in the Table.")
		t.Fail()
	}

}
