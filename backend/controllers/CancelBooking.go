package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"
	"strconv"
)

func CheckBookingID(bookingID_ uint) (bool, string) {
	valid := true
	var _ error
	var exists bool
	//var allerror []bool
	var errorstring string

	bookingid := bookingID_
	_ = database.DB.Model(&models.Booking{}).Select("count(*) > 0").Where("booking_id = ?", bookingid).Find(&exists).Error
	err1 := exists

	if err1 == false {
		valid = false
		errorstring = errorstring + string(bookingid) + ", "
	}

	return valid, errorstring
}

func CancelBooking(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	type result struct {
		TeacherID uint
		SlotID    uint
	}

	var Result result
	bookingID, err1 := strconv.Atoi(data["bookingID"])

	if err1 != nil {
		return fiber.NewError(fiber.StatusNotAcceptable, "Data Validation failed. Booking failed.")
	}

	bookingID_ := uint(bookingID)
	// Check if booking ID is vaild
	validity, screwedIds := CheckBookingID(bookingID_)
	if !validity {
		return fiber.NewError(fiber.StatusNotFound, screwedIds+" booking doesn't exist")
	}
	var booking []models.Booking
	// get booking details from booking table
	database.DB.Where("booking_id = ?", bookingID_).Find(&booking).Scan(&Result)
	print(Result.TeacherID)

	teacherID_ := Result.TeacherID
	slotID_ := Result.SlotID

	// Free slot in teacher_schedules table
	database.DB.Model(&models.TeacherSchedule{}).Where("teacher_id = ? AND slot_id = ?", teacherID_, slotID_).Update("Availability", "1")

	// remove booking from booking table
	database.DB.Where("booking_id = ?", bookingID_).Delete(&booking)

	return c.JSON(fiber.Map{
		"data":   "booking cancelled",
		"status": fiber.StatusOK,
	})
}
