package models

type Relation_t_s struct {
	SkillID uint `gorm:"primary_key"`
	Skill   Skill

	TeacherID uint `gorm:"primary_key"`
	Teacher   Teacher
}
