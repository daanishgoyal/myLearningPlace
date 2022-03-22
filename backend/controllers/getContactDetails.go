package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetContactDetails(c *fiber.Ctx) error {

	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	teacherID := data["teacher_id"]

	var contactdetails []models.ContactDetails

	type Result struct {
		Teacher_MobileNumber string
		Teacher_Email        string
		TeacherID            uint
	}

	var result []Result

	database.DB.Where("teacher_id = ?", teacherID).Find(&contactdetails).Scan(&result)

	return c.JSON(fiber.Map{
		"data":   result,
		"status": fiber.StatusOK,
	})
}
