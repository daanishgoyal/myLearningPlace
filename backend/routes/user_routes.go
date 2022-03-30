package routes

import (
	"backend/controllers"
	"github.com/gofiber/fiber/v2"
)

func Login(app *fiber.App) {
	app.Post("/api/login", controllers.Login)
}

func Register(app *fiber.App) {
	app.Post("/api/register", controllers.Register)
}

func GetComments(app *fiber.App) {
	app.Post("/api/getComments", controllers.GetComments)
}

func GetContactDetails(app *fiber.App) {
	app.Post("/api/getContactDetails", controllers.GetContactDetails)
}

func GetTeacherSchedule(app *fiber.App) {
	app.Post("/api/getTeacherSchedule", controllers.GetTeacherSchedule)
}
