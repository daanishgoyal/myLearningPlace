package main

import (
	"backend/database"
	"backend/routes"
	"github.com/gofiber/fiber"
)

func main() {
	database.Connect()
	app := fiber.New()
	routes.Setup(app)
	routes.Login(app)
	routes.Search(app)
	app.Listen(":3000")
}
