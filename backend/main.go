package main

import (
	"backend/database"
	"backend/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	//DataBase Connection Setup
	database.Connect()

	// App object creation
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	// Add "/" route
	routes.Greeting(app)

	// Add "/api/register" route
	routes.Register(app)

	// Add "/api/login" route
	routes.Login(app)

	routes.GetSkills(app)

	routes.GetLocations(app)

	routes.GetMiscImages(app)

	routes.GetComments(app)

	routes.GetContactDetails(app)

	// Add "/api/search route
	routes.Search(app)
	app.Listen(":8080")
}
