package models

type Teacher struct {
	ID            uint `gorm:"primary_key"`
	FirstName     string
	LastName      string
	City          string
	Email         string `gorm:"UNIQUE; NOT NULL"`
	IsTeachOnline bool
	Payrate       float32
	Rating        int8
	ShortDesc     string
	LongDesc      string
	Tag           string
	// Photo
}
