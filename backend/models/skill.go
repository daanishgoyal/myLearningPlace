package models

type Skill struct {
	ID        uint `gorm:"primary_key"`
	SkillName string
}
