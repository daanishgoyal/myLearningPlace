package unittest

import (
	"backend/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/mail"
	"testing"
)

// Checks whether email address stored in Tables: User and ContactDetails are valid

func TestValidateEmail(t *testing.T) {
	dsn := config.SqlUserName + ":" + config.SqlPassword + "@/" + config.SqlDatabaseName
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		t.Errorf("Connection to DB Failed")
		t.Fail()
	}

	DB := connection

	type EmailIDs struct {
		Email         string
		Teacher_Email string
	}

	var emailIds []EmailIDs
	DB.Table("users").Select("Email").Find(&emailIds)

	for i := 0; i < len(emailIds); i++ {
		_, err = mail.ParseAddressList(emailIds[i].Email)
		if err != nil {
			t.Error(err)
			t.Fail()
		}
	}
	emailIds = nil
	DB.Table("contact_details").Select("Teacher_Email").Find(&emailIds)
	for i := 0; i < len(emailIds); i++ {
		_, err = mail.ParseAddressList(emailIds[i].Teacher_Email)
		if err != nil {
			t.Error(err)
			t.Fail()
		}
	}

}
