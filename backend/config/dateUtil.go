package config

import (
	"backend/models"
	"time"
)

func GetBookingDate(slots models.Slot) time.Time {
	mapper := GetWeekEndMap()
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
	return datebooked
	//year, month, date = datebooked.Date()
	//
	//final_datebooked := fmt.Sprint(int(month), "/", date, "/", year)
	//return final_datebooked
}

func ParseStringToTime(stringtime string) time.Time {
	parsedDate, err := time.Parse("1/2/2006", stringtime)
	if err != nil {
		panic(err)
	}

	return parsedDate
}
