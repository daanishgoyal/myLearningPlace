package routes

import (
	"backend/controllers"
	"github.com/gofiber/fiber/v2"
)

func CreateBookings(app *fiber.App) {
	app.Post("/api/booking/create", controllers.CreateBooking)
}

func SearchBookingByUserId(app *fiber.App) {
	app.Post("/api/booking/search/userid", controllers.SearchBookingByUserId)
}
