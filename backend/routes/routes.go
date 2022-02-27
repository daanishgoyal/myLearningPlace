package routes

import (
	"backend/controllers"
	"github.com/gofiber/fiber/v2"
)

func Greeting(app *fiber.App) {
	app.Get("/", controllers.Greeting)
}

func GetSkills(app *fiber.App) {
	app.Get("/api/getSkills", controllers.GetSkills)
}

func GetLocations(app *fiber.App) {
	app.Get("/api/getLocations", controllers.GetLocations)
}

func GetMiscImages(app *fiber.App) {
	app.Get("/api/getMiscImages", controllers.GetMiscImages)
}
