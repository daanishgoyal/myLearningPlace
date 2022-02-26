package models

import (
	"gorm.io/datatypes"
)

type Slots struct {
	SlotID uint `gorm:"primary_key"`
	Day    datatypes.Date
	Time   datatypes.Time
}
