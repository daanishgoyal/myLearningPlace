package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetLocations(c *fiber.Ctx) error {

	var teacher = []models.Teacher{}

	//var teacher models.Teacher
	//

	database.DB.Table("Teachers").Select("City").Scan(&teacher)

	//database.DB.Select("City").Find(&teachers)
	//if query.RowsAffected == 0 {
	//	return c.JSON(fiber.Map{"message": "locations not found"})

	return c.JSON(fiber.Map{"data": teacher})

}
