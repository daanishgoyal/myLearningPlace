package models

type MiscImages struct {
	ImageID      uint8 `gorm:"primary_key"`
	ImageCaption string
	ImagePath    string
}
