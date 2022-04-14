package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func Search(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	queryCity := data["city"]
	querySkill := data["skill"]

	if len(queryCity) != 0 && len(querySkill) != 0 {
		//	search by skill and location

		var skill = models.Skill{}
		var relTS []models.Relation_t_s
		var teacher []models.Teacher

		database.DB.Where("skill_name = ?", querySkill).Find(&skill)
		querySkillID := skill.ID

		database.DB.Where("skill_id = ?", querySkillID).Find(&relTS)
		var teacherIds []uint

		for i := 0; i < len(relTS); i++ {
			teacherIds = append(teacherIds, relTS[i].TeacherID)
		}

		database.DB.Where("id IN ? AND city = ?", teacherIds, queryCity).Find(&teacher)

		if len(teacher) == 0 {
			return c.JSON(fiber.Map{"data": nil, "error": "No teacher found", "rows_affected": len(teacher), "status": fiber.StatusNotFound})
		} else {
			return c.JSON(fiber.Map{"data": teacher, "error": nil, "rows_affected": len(teacher), "status": fiber.StatusOK})
		}

	} else if len(queryCity) != 0 && len(querySkill) == 0 {
		// Search by city
		var teachers []models.Teacher

		result := database.DB.Where("city = ?", queryCity).Find(&teachers)

		if result.RowsAffected == 0 {
			return c.JSON(fiber.Map{"data": nil, "error": "No teacher found", "rows_affected": result.RowsAffected, "status": fiber.StatusNotFound})
		} else {
			return c.JSON(fiber.Map{"data": teachers, "error": nil, "rows_affected": result.RowsAffected, "status": fiber.StatusOK})
		}

	} else if len(queryCity) == 0 && len(querySkill) != 0 {
		//	Search by skill

		var skill = models.Skill{}
		var relTS []models.Relation_t_s
		var teacher []models.Teacher

		database.DB.Where("skill_name = ?", querySkill).Find(&skill)
		querySkillID := skill.ID

		database.DB.Where("skill_id = ?", querySkillID).Find(&relTS)
		var teacherIds []uint

		for i := 0; i < len(relTS); i++ {
			teacherIds = append(teacherIds, relTS[i].TeacherID)
		}
		database.DB.Where("id IN ?", teacherIds).Find(&teacher)

		if len(teacher) == 0 {
			return c.JSON(fiber.Map{"data": nil, "error": "No teacher found", "rows_affected": len(teacher), "status": fiber.StatusNotFound})
		} else {
			return c.JSON(fiber.Map{"data": teacher, "error": nil, "rows_affected": len(teacher), "status": fiber.StatusOK})
		}
	} else {
		return c.JSON(fiber.Map{"error": "no input given", "rows_affected": nil})
	}

}
