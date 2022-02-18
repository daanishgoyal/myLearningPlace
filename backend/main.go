package main

import (
	"backend/database"
	"backend/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {

	//database.Create("NEW_DB")
	//fmt.Println(database.ReadJson())

	// DataBase Connection Setup
	database.Connect()
	//
	//// App object creation
	app := fiber.New()
	//
	//// Add "/" route
	routes.Greeting(app)
	//
	//// Add "/api/register" route
	routes.Register(app)
	//
	//// Add "/api/login" route
	routes.Login(app)

	routes.GetSkills(app)

	routes.GetLocations(app)
	//
	//// Add "/api/search route
	//routes.Search(app)
	app.Listen(":8080")
}
