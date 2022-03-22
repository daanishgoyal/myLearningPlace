package controllers

import (
	"backend/config"
	"backend/database"
	"backend/models"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"time"
)

func GetTeacherSchedule(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	teacherID := data["teacher_id"]
	type Result struct {
		SlotID    uint
		Day       string
		StartTime string
		EndTime   string
	}

	var result1 []Result

	var teacherSch []models.TeacherSchedule
	var slots []models.Slot

	database.DB.Where("teacher_id= ?", teacherID).Find(&teacherSch)

	var slotIds []uint

	for i := 0; i < len(teacherSch); i++ {
		slotIds = append(slotIds, teacherSch[i].SlotId)
	}

	database.DB.Where("slot_id IN ?", slotIds).Find(&slots).Scan(&result1)

	var dates []string

	for i := 0; i < len(slots); i++ {
		dates = append(dates, GetBookingDate(slots[i]))

	}

	type Output struct {
		SlotID    uint
		Day       string
		StartTime string
		EndTime   string
		Date      string
	}

	var output []Output

	for i := 0; i < len(result1); i++ {
		output = append(output, Output{
			SlotID:    result1[i].SlotID,
			Day:       result1[i].Day,
			StartTime: result1[i].StartTime,
			EndTime:   result1[i].EndTime,
			Date:      dates[i],
		})

	}

	return c.JSON(fiber.Map{"data": output})

}

func GetBookingDate(slots models.Slot) string {
	mapper := config.GetWeekEndMap()
	now := time.Now()
	slotStartTime, _ := time.Parse("03:04 PM", slots.StartTime)
	year, month, date := now.Date()
	timeDay := mapper[slots.Day]
	daysUntilSlot := 0
	if now.Weekday() == timeDay {
		if now.Hour() < slotStartTime.Hour() {
			daysUntilSlot = 0
		} else {
			daysUntilSlot = 7
		}
	} else {
		daysUntilSlot = int((7 + timeDay - now.Weekday()) % 7)
	}
	datebooked := time.Date(year, month, date+daysUntilSlot, 0, 0, 0, 0, now.Location())
	year, month, date = datebooked.Date()

	final_datebooked := fmt.Sprint(int(month), "/", date, "/", year)
	return final_datebooked
}
