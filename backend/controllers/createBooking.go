package controllers

import (
	"backend/config"
	"backend/database"
	"backend/models"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"strconv"
	"strings"
)

type bookingresult struct {
	BookingId     uint
	UserId        uint
	TeacherId     uint
	SkillId       uint
	SlotId        uint
	UserName      string
	TeacherName   string
	SkillName     string
	SlotStartTime string
	SlotEndTime   string
	SlotDay       string
	SlotDate      string
}

func CreateBooking(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return fiber.NewError(fiber.StatusUnprocessableEntity, "Payload parser failed. Booking failed.")
	}

	userId, err_1 := strconv.Atoi(data["userId"])
	teacherId, err_2 := strconv.Atoi(data["teacherId"])
	skillId, err_3 := strconv.Atoi(data["skillId"])
	slotId, err_4 := strconv.Atoi(data["slotId"])

	if err_1 != nil || err_2 != nil || err_3 != nil || err_4 != nil {
		return fiber.NewError(fiber.StatusNotAcceptable, "Data Validation failed. Booking failed.")
	}

	slots := models.Slot{}
	database.DB.First(&slots, slotId)

	datebooked := config.GetBookingDate(slots)

	booking := models.Booking{
		TeacherID:  uint(teacherId),
		SkillID:    uint(skillId),
		SlotID:     uint(slotId),
		UserID:     uint(userId),
		DateBooked: datebooked,
	}

	result := database.DB.Create(&booking)

	database.DB.Preload("Teacher").Preload("Skill").Preload("Slot").Preload("User").Where("booking_id = ?", booking.BookingID).Find(&booking)

	bkResult := bookingresult{
		BookingId:     booking.BookingID,
		UserId:        booking.UserID,
		UserName:      fmt.Sprint(booking.User.FirstName + " " + booking.User.LastName),
		TeacherId:     booking.TeacherID,
		TeacherName:   booking.Teacher.Name,
		SkillId:       booking.SkillID,
		SkillName:     booking.Skill.SkillName,
		SlotId:        booking.SlotID,
		SlotDay:       booking.Slot.Day,
		SlotStartTime: booking.Slot.StartTime,
		SlotEndTime:   booking.Slot.EndTime,
		SlotDate:      strings.Fields(booking.DateBooked.String())[0],
	}

	// Confirmation on booking
	return c.JSON(fiber.Map{
		"data":          bkResult,
		"status":        fiber.StatusOK,
		"error":         result.Error,
		"rows_affected": result.RowsAffected})
}
