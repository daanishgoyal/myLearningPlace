package controllers

import (
	"backend/database"
	"backend/models"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
	"strconv"
	"strings"
	"time"
)

type result struct {
	UserName      string
	TeacherName   string
	SkillName     string
	SlotStartTime string
	SlotEndTime   string
	SlotDay       string
	SlotDate      string
}

func BookingQueryScanner(queriedBooking []models.Booking) []result {
	var all_scanner []result
	var scanner result

	for i := 0; i < len(queriedBooking); i++ {
		scanner.UserName = fmt.Sprint(queriedBooking[i].User.FirstName + " " + queriedBooking[i].User.LastName)
		scanner.TeacherName = queriedBooking[i].Teacher.Name
		scanner.SkillName = queriedBooking[i].Skill.SkillName
		scanner.SlotStartTime = queriedBooking[i].Slot.StartTime
		scanner.SlotEndTime = queriedBooking[i].Slot.EndTime
		scanner.SlotDay = queriedBooking[i].Slot.Day
		scanner.SlotDate = strings.Fields(queriedBooking[i].DateBooked.String())[0]

		all_scanner = append(all_scanner, scanner)
	}

	return all_scanner
}

func SearchBookingByUserId(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	// Validation
	userId, err1 := strconv.Atoi(data["userId"])

	if err1 != nil {
		return c.JSON(fiber.Map{
			"data":   nil,
			"status": fiber.StatusBadRequest,
			"error":  "userId is not an integer. String parsing failed",
		})
	}
	includePast, err2 := strconv.ParseBool(data["includePast"])
	if err2 != nil {
		return c.JSON(fiber.Map{
			"data":   nil,
			"status": fiber.StatusBadRequest,
			"error":  "includePast is not an boolean. String parsing failed",
		})
	}

	// Check Valid UserId
	if !ValidateIds(userId, models.User{}, "id") {
		return fiber.NewError(fiber.StatusNotFound, "UserId not found")
	}

	var bookingInstance []models.Booking

	var result *gorm.DB
	if includePast {
		result = database.DB.Preload("Teacher").Preload("Skill").Preload("Slot").Preload("User").Where("user_id = ?", userId).Find(&bookingInstance)
	} else {
		result = database.DB.Preload("Teacher").Preload("Skill").Preload("Slot").Preload("User").Where("user_id = ? AND date_booked > ?", userId, time.Now()).Find(&bookingInstance)
	}

	if len(bookingInstance) == 0 {
		return c.JSON(fiber.Map{
			"data":          nil,
			"includePast":   includePast,
			"status":        fiber.StatusNotFound,
			"error":         "No bookings found",
			"rows_affected": len(bookingInstance),
		})
	} else {
		scannedQuery := BookingQueryScanner(bookingInstance)

		return c.JSON(fiber.Map{
			"data":          scannedQuery,
			"includePast":   includePast,
			"status":        fiber.StatusOK,
			"error":         result.Error,
			"rows_affected": result.RowsAffected})
	}
}

func ValidateIds(checkId int, model interface{}, IdColumnInDb string) bool {
	checkId_ := uint(checkId)
	var exists bool
	query := IdColumnInDb + "= ?"
	_ = database.DB.Model(model).Select("count(*) > 0").Where(query, checkId_).Find(&exists).Error
	return exists
}
