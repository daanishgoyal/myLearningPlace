package models

import "time"

type Booking struct {
	BookingID  uint `gorm:"PrimaryKey"`
	SkillID    uint
	Skill      Skill
	TeacherID  uint
	Teacher    Teacher
	SlotID     uint
	Slot       Slot
	UserID     uint
	User       User
	DateBooked time.Time
}
