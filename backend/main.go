package main

import (
	"Sprint1/database"
	"Sprint1/routes"
	"github.com/gofiber/fiber"
)

func main() {
	database.Connect()
	app := fiber.New()
	routes.Setup(app)
	app.Listen(":3000")
}
