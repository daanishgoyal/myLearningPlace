package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetComments(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	teacherID := data["id"]

	var comments []models.Comments
	type Result struct {
		commentby   string
		commenttext string
		teacherid   uint
	}

	var result []Result

	database.DB.Where("teacher_id = ?", teacherID).Find(&comments).Scan(&result)

	//
	//database.DB.Where("teacher_id = ?", teacherID).Find(comments)

	//var commentby []string
	//var commenttext []string
	//
	//for i := 0; i < len(comments); i++ {
	//commentby = append(commentby, comments[i].CommentBy)
	//	commenttext = append(commenttext, comments[i].CommentText)
	//}

	//if len(result) == 0 {
	//	return c.JSON(fiber.Map{"data": nil, "error": "No comment found", "rows_affected": len(result)})
	//} else {
	//	return c.JSON(fiber.Map{"data": result, "error": nil, "rows_affected": len(result)})
	//}

	return c.JSON(fiber.Map{"data": result})
}
