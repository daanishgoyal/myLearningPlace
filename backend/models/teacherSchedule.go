package models

type TeacherSchedule struct {
	SlotId       uint `gorm:"primary_key"`
	Slot         Slot
	TeacherID    uint `gorm:"primary_key"`
	Teacher      Teacher
	Availability bool
}
