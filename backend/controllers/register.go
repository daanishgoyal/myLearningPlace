package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 12)

	user := models.User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
		//City:      data["city"],
		Email: data["email"],
		// Password data["password"],
		Password: password,
	}

	result := database.DB.Create(&user)

	return c.JSON(fiber.Map{"data": user, "error": result.Error, "rows_affected": result.RowsAffected})
}
