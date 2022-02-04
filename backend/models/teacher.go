package models

type Teacher struct {
	Id            uint `gorm:"primary_key"`
	FirstName     string
	LastName      string
	City          string
	Email         string `gorm:"UNIQUE; NOT NULL"`
	IsTeachOnline bool
	Payrate       float32
	Tag           string
	Rating        int8
	ShortDesc     string
	LongDesc      string
}
