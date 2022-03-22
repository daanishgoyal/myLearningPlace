package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetTeacherSchedule(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	teacherID := data["teacher_id"]

	var teacherSch []models.TeacherSchedule

	database.DB.Where("teacher_id= ?", teacherID).Find(&teacherSch)

	var slotIds []uint

	for i := 0; i < len(teacherSch); i++ {
		slotIds = append(slotIds, teacherSch[i].SlotID)
	}

	print(slotIds)
	return c.JSON(fiber.Map{"data": slotIds})

}
