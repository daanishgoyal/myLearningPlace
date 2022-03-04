package models

type Slots struct {
	SlotID    uint `gorm:"primary_key"`
	Day       string
	StartTime string
	EndTime   string
}
