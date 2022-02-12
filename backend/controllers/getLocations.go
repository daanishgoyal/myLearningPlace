package controllers

import (
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func getLocations(c *fiber.Ctx) error {

	var teacher = []models.Teacher{}

	var locations []byte

	return c.JSON(fiber.Map{"data": locations})

}