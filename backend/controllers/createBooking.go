package controllers

import (
	"backend/config"
	"backend/database"
	"backend/models"
	"fmt"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type BookingDetails struct {
	BookingId     uint
	UserId        uint
	TeacherId     uint
	SkillId       uint
	SlotId        uint
	UserName      string
	UserEmail     string
	TeacherName   string
	SkillName     string
	SlotStartTime string
	SlotEndTime   string
	SlotDay       string
	SlotDate      string
	UserFirstName string
}

func checkAvailabilitySlot(teacherId_ uint, slotId_ uint) (bool, error) {

	type avail struct {
		Availability bool
	}

	var availCheck avail
	err := database.DB.Model(&models.TeacherSchedule{}).Where("teacher_id = ? AND slot_id = ?", teacherId_, slotId_).First(&availCheck)
	if err.Error == gorm.ErrRecordNotFound {
		return false, err.Error
	}

	if availCheck.Availability {
		return true, nil
	} else {
		return false, nil
	}
}

func validIDs(teacherId_ uint, slotId_ uint, skillId_ uint, userId_ uint) (bool, string) {
	valid := true
	var _ error
	var exists bool
	var allerror []bool
	var errorstring string

	var names = [4]string{"UserId", "TeacherId", "SkillId", "SlotId"}

	_ = database.DB.Model(&models.User{}).Select("count(*) > 0").Where("id = ?", userId_).Find(&exists).Error
	err1 := exists
	_ = database.DB.Model(&models.Teacher{}).Select("count(*) > 0").Where("id = ?", teacherId_).Find(&exists).Error
	err2 := exists
	_ = database.DB.Model(&models.Skill{}).Select("count(*) > 0").Where("id = ?", skillId_).Find(&exists).Error
	err3 := exists
	_ = database.DB.Model(&models.Slot{}).Select("count(*) > 0").Where("slot_id = ?", slotId_).Find(&exists).Error
	err4 := exists

	allerror = append(allerror, err1, err2, err3, err4)

	for i := 0; i < len(allerror); i++ {
		if allerror[i] == false {
			valid = false
			errorstring = errorstring + names[i] + ", "
		}
	}
	return valid, errorstring
}

func CreateBooking(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return fiber.NewError(fiber.StatusUnprocessableEntity, "Payload parser failed. Booking failed.")
	}

	userId, err1 := strconv.Atoi(data["userId"])
	teacherId, err2 := strconv.Atoi(data["teacherId"])
	skillId, err3 := strconv.Atoi(data["skillId"])
	slotId, err4 := strconv.Atoi(data["slotId"])

	if err1 != nil || err2 != nil || err3 != nil || err4 != nil {
		return fiber.NewError(fiber.StatusNotAcceptable, "Data Validation failed. Booking failed.")
	}

	teacherId_ := uint(teacherId)
	skillId_ := uint(skillId)
	slotId_ := uint(slotId)
	userId_ := uint(userId)

	// Check IDs are vaild
	validity, screwedIds := validIDs(teacherId_, slotId_, skillId_, userId_)
	if !validity {
		return fiber.NewError(fiber.StatusNotFound, screwedIds+" doesn't exist")
	}

	// Check slot is availability or blocked
	availability, err5 := checkAvailabilitySlot(teacherId_, slotId_)
	if err5 != nil {
		return fiber.NewError(fiber.StatusNotFound, "Teacher doesn't teaches on this slot. Please select a valid slot. Error: "+err5.Error())
	}
	if !availability {
		return fiber.NewError(fiber.StatusForbidden, "Slot is not available. It has been booked already.")
	}

	slots := models.Slot{}
	database.DB.First(&slots, slotId)

	datebooked := config.GetBookingDate(slots)

	booking := models.Booking{
		TeacherID:  teacherId_,
		SkillID:    skillId_,
		SlotID:     slotId_,
		UserID:     userId_,
		DateBooked: datebooked,
	}

	result := database.DB.Create(&booking)

	database.DB.Preload("Teacher").Preload("Skill").Preload("Slot").Preload("User").Where("booking_id = ?", booking.BookingID).Find(&booking)

	bkResult := BookingDetails{
		BookingId:     booking.BookingID,
		UserId:        booking.UserID,
		UserName:      fmt.Sprint(booking.User.FirstName + " " + booking.User.LastName),
		UserFirstName: booking.User.FirstName,
		UserEmail:     booking.User.Email,
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

	// Block slot in teacher_schedules table
	database.DB.Model(&models.TeacherSchedule{}).Where("teacher_id = ? AND slot_id = ?", booking.TeacherID, booking.SlotID).Update("Availability", "0")

	//Send Email Confirmation
	confirmationSent := false
	errEmail := SendHTMLEmail(bkResult)
	if errEmail == nil {
		confirmationSent = true
	}

	// Confirmation on booking
	return c.JSON(fiber.Map{
		"data":               bkResult,
		"status":             fiber.StatusOK,
		"error_booking":      result.Error,
		"confirmation_sent":  confirmationSent,
		"error_confirmation": errEmail,
		"rows_affected":      result.RowsAffected})
}
