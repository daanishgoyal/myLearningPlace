package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetMiscImages(c *fiber.Ctx) error {
	var image = []models.MiscImages{}
	type Result struct {
		ImageID      uint8
		ImageCaption string
		ImagePath    string
	}
	var result []Result

	database.DB.Find(&image).Scan(&result)

	if len(result) == 0 {
		return c.JSON(fiber.Map{"data": nil, "error": "no record found", "rows_affected": len(result)})
	} else {
		return c.JSON(fiber.Map{"data": result, "error": "", "rows_affected": len(result)})
	}

}
