package models

type TeacherSchedule struct {
	SlotId uint
	Slots  Slots

	TeacherID uint `gorm:"primary_key"`
	Teacher   Teacher
}
