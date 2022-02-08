package routes

import (
	"backend/controllers"
	"github.com/gofiber/fiber/v2"
)

func Search(app *fiber.App) {
	app.Post("/api/search", controllers.Search)
}
