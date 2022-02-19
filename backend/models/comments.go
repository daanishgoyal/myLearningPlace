package models

import "gorm.io/gorm"

type Comments struct {
	gorm.Model
	commentBy   string `gorm:"primary_key"`
	commentText string `gorm:"primary_key"`
}
