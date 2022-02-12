package controllers

import (
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func getSkills(c *fiber.Ctx) error {

	var skills = []models.Skill{}

	return c.JSON(fiber.Map{"data": skills})

}
