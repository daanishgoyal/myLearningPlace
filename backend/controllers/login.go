package controllers

import (
	"Youtube_GO/database"
	"Youtube_GO/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Login(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)
	if err != nil {
		return err
	}

	var loginUser = models.User{}
	database.DB.Debug().Where("email = ?", data["email"]).First(&loginUser)

	// If email address is not found
	if loginUser.ID == 0 {
		return c.JSON(fiber.Map{"err": "NotFound", "error_message": "email address not found", "status": fiber.StatusNotFound})
	}

	// If email address is found
	// Compare password

	err = bcrypt.CompareHashAndPassword(loginUser.Password, []byte(data["password"]))
	if err != nil {
		return c.JSON(fiber.Map{"err": "Unauthorized", "error_message": "Incorrect Password", "status": fiber.StatusUnauthorized})
	} else {
		return c.JSON(fiber.Map{"data": loginUser,
			"err":     err,
			"status":  fiber.StatusOK,
			"message": "User Validated"})
	}

	// Email found, password validated
	// Success message

}
