package routes

import (
	"backend/controllers"
	"github.com/gofiber/fiber/v2"
)

func Greeting(app *fiber.App) {
	app.Get("/", controllers.Greeting)
}

func GetSkills(app *fiber.App) {
	app.Get("/api/getskills", controllers.GetSkills)
}
