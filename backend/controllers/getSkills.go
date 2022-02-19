package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetSkills(c *fiber.Ctx) error {

	var skills = []models.Skill{}
	type Result struct {
		SkillName string
	}
	var result []Result

	database.DB.Select("SkillName").Find(&skills).Scan(&result)

	if len(result) == 0 {
		return c.JSON(fiber.Map{"data": nil, "error": "no record found", "rows_affected": len(result)})
	} else {
		return c.JSON(fiber.Map{"data": result, "error": "", "rows_affected": len(result)})
	}

}
