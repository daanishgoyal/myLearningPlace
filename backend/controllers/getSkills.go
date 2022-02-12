package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetSkills(c *fiber.Ctx) error {

	var skills = []models.Skill{}

	query := database.DB.Find(&skills)

	if query.RowsAffected == 0 {
		return c.JSON(fiber.Map{"message": "skills not found"})
	}
	return c.JSON(fiber.Map{"data": skills})

}
