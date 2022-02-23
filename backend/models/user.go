package models

type User struct {
	ID        uint `gorm:"primary_key;NOT NULL AUTO_INCREMENT"`
	FirstName string `gorm:"column: firstName"`
	LastName  string `gorm:"column: lastName"`
	Email string `gorm:"UNIQUE; NOT NULL"`
	Password []byte
}
