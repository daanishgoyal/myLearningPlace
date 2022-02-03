package routes

import (
	"Sprint1/controller"
	"github.com/gofiber/fiber"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
}
