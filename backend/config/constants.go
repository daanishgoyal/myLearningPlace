package config

import "time"

// Sql - Const for Database Connection
const SqlUserName string = "root"
const SqlPassword string = "root"
const SqlDatabaseName string = "test_se"

// PasswordCost Const for setting the cost of Password for hashing
const PasswordCost int = 14

// Smtp - Const for sending email confirmation
const SmtpHost string = "smtp.gmail.com"
const SmtpPort int = 587

// AdminEmail - Const account detail of Admin
const AdminEmailAddress string = "booking.mylearningplace@gmail.com"
const AdminEmailPassword string = "rootroot"

//// UserEmail - Const account detail of Test User
//const UserEmailAddress string = "testuser.mylearningplace@gmail.com"
//const UserEmailPassword string = "rootroot"

// GetWeekEndMap - Const Map for String to time.Weekday conversion
func GetWeekEndMap() map[string]time.Weekday {
	return map[string]time.Weekday{
		"Sunday":    time.Sunday,
		"Monday":    time.Monday,
		"Tuesday":   time.Tuesday,
		"Wednesday": time.Wednesday,
		"Thursday":  time.Thursday,
		"Friday":    time.Friday,
		"Saturday":  time.Saturday,
	}
}

// APIRoutes - Map used for running acceptance tests
func APIRoutes() map[string]string {
	return map[string]string{
		"Greetings":        "http://localhost:8080/",
		"GetSkillidByName": "http://localhost:8080/api/getSkillId/",
		"SearchTeacher":    "http://localhost:8080/api/search",
		"GetSkills":        "http://localhost:8080/api/getSkills/",
	}
}

// APIExpectedResponse - Map used for running acceptance tests
func APIExpectedResponse() map[string][]byte {
	return map[string][]byte{
		"Greetings":        []byte(`Hello, World!`),
		"GetSkillidByName": []byte(`{"data":{"ID":2,"SkillName":"Music"},"status":200}`),
		"SearchTeacher":    []byte(`{"data":[{"ID":6,"Name":"John Matthews","Age":50,"Profession":"Master","Experience":10,"Fees":23.5,"City":"Miami","Description":"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international","Subject":"Yoga - beginner to intermediate","Education":"MS in physics (Aug, 2016–Jul, 2021) from University","IsTeachesOnline":false,"IsTeachesOffline":true,"Rating":10,"CanCommute":false,"Bio":"Namaste, My name is John Matthews and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now","ImagePath":"img/teacher/Teacher_6.jpg"}],"error":null,"rows_affected":1,"status":200}`),
		"GetSkills":        []byte(`{"data":[{"SkillName":"Basketball"},{"SkillName":"Music"},{"SkillName":"Yoga"},{"SkillName":"Chess"},{"SkillName":"Zumba"},{"SkillName":"Programming"},{"SkillName":"Cooking"}],"error":"","rows_affected":7}`),
	}
}
