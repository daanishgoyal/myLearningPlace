package unittest

import (
	"backend/config"
	"backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"testing"
)

func TestPopulateTables(t *testing.T) {

	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName + "?parseTime=True&loc=Local"
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
	var miscImage []models.MiscImages
	var slots []models.Slot
	var contact []models.ContactDetails
	var booking []models.Booking
	var teacherSchedule []models.TeacherSchedule

	tableModels := []interface{}{teachers, users, skills, comments, relTS, miscImage, slots, contact, booking, teacherSchedule}
	table := []string{"Teachers", "User", "Skills", "Comments", "RelationTS", "MiscImages", "Slot", "ContactDetails", "Booking", "TeacherSchedule"}

	for i := 0; i < len(tableModels); i++ {
		count := DB.Find(&tableModels[i])
		if count.RowsAffected <= 0 {
			t.Errorf("Table " + table[i] + " is empty. Please populate the tables first.")
			t.Fail()
		}
	}
}
