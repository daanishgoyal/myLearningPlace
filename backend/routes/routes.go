package routes

import (
	"backend/controller"
	"github.com/gofiber/fiber"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
}
func Login(app *fiber.App) {
	app.Post("/api/login", controller.Login)
}
