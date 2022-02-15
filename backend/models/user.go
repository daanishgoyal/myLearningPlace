package models

// Capital columns

type User struct {
	ID        uint `gorm:"primary_key;NOT NULL AUTO_INCREMENT"`
	FirstName string
	LastName  string
	City      string
	Email     string `gorm:"UNIQUE; NOT NULL"`
	//Password  string
	Password []byte
}
