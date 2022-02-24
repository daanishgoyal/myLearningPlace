package models

type Teacher struct {
	ID               uint `gorm:"primary_key"`
	Name             string
	Age              uint
	Profession       string
	Experience       float32
	Fees             float32
	City             string
	Description      string // short_desc
	Subject          string // tags
	Education        string
	IsTeachesOnline  bool
	IsTeachesOffline bool
	Rating           float32
	CanCommute       bool
	Bio              string // long_desc
	ImagePath        string
}
