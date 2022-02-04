package controller

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string

	err := c.BodyParser(&data)

	if err != nil {
		return err
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}

	database.DB.Create(&user)
	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)
	if err != nil {
		return err
	}

	var loginUser = models.User{}
	database.DB.Debug().Where("email = ?", data["email"]).First(&loginUser)

	// If email address is not found
	if loginUser.Id == 0 {
		return c.JSON(fiber.Map{"err": "NotFound", "error_message": "email address not registered, PLEASE REGISTER", "status": fiber.StatusNotFound})
	}

	// If email address is found
	// Compare password
	err = bcrypt.CompareHashAndPassword(loginUser.Password, []byte(data["password"]))
	if err != nil {
		return c.JSON(fiber.Map{"err": "Unauthorized", "error_message": "Incorrect Password, TRY AGAIN", "status": fiber.StatusUnauthorized})
	} else {
		return c.JSON(fiber.Map{"data": loginUser,
			"err":     err,
			"status":  fiber.StatusOK,
			"message": "User Validated"})
	}

}
