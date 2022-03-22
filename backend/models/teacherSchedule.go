package models

type TeacherSchedule struct {
	SlotId uint
	Slot   Slot

	Availability bool

	TeacherID uint `gorm:"primary_key"`
	Teacher   Teacher
}
