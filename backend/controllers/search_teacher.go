package controllers

import (
	"backend/models"
	"github.com/gofiber/fiber/v2"
	"log"
)

func Search(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	log.Print(data)

	if err != nil {
		return err
	}

	//city, containsCity := data["city"]
	//skill, containsSkill := data["skill"]
	//
	//if containsCity && containsSkill{
	//
	//}
	//if skill, containsSkill := data[]

	//var teachers = []models.Teacher{}
	//city := data["city"]
	//result := database.DB.Debug().Where("city = ?", city).Find(&teachers)
	//
	//if result.RowsAffected == 0 {
	//	return c.JSON(fiber.Map{"message": "city not found"})
	//} else {
	//	return c.JSON(fiber.Map{"data": teachers})
	//}

	var skill = models.Skill{}
	//query_skill := data["skill"]
	//
	//result := database.DB.Select("ID").Where("skill_name = ?", query_skill).Find(&skill)
	//// SELECT `id` FROM `skills` WHERE skill_name = 'Music'
	log.Print(skill.ID)
	//
	//var relation = []models.Relation_t_s{}
	//result = database.DB.Select("TeacherID").Where("skill_id = ?", skill.ID).Find(&relation)
	//
	////log.Print(relation[0].TeacherID)
	//
	//if result.RowsAffected == 0 {
	//	return c.JSON(fiber.Map{"message": "skill not found"})
	//} else {
	//	return c.JSON(fiber.Map{"data": relation})
	//}

	//var teachers = []models.Teacher{}
	//database.DB.Where()
	//
	//
	//if result.RowsAffected == 0 {
	//	return c.JSON(fiber.Map{"message": "skill not found"})
	//} else {
	//	return c.JSON(fiber.Map{"data": skill})
	//}
	return nil
}
