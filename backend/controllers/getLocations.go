package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetLocations(c *fiber.Ctx) error {
	var teachers = []models.Teacher{}
	type Result struct {
		City string
	}
	var result []Result

	database.DB.Select("City").Distinct().Find(&teachers).Scan(&result)

	if len(result) == 0 {
		return c.JSON(fiber.Map{"data": nil, "error": "no record found", "rows_affected": len(result)})
	} else {
		return c.JSON(fiber.Map{"data": result, "error": "", "rows_affected": len(result)})
	}

}
