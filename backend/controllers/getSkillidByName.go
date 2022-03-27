package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetSkillidByName(c *fiber.Ctx) error {

	var data map[string]string

	err := c.BodyParser(&data)

	skillName := data["SkillName"]
	if err != nil {
		return err
	}

	var skills models.Skill
	database.DB.Where("skill_name = ?", skillName).Find(&skills)

	return c.JSON(fiber.Map{
		"data":   skills,
		"status": fiber.StatusOK,
	})

}
