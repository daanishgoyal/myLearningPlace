package config

import "time"

// Sql - Const for Database Connection
const SqlUserName string = "root"
const SqlPassword string = ""
const SqlDatabaseName string = "BackEnd"

// PasswordCost Const for setting the cost of Password for hashing
const PasswordCost int = 14

// Smtp - Const for sending email confirmation
const SmtpHost string = "smtp.gmail.com"
const SmtpPort int = 587

// AdminEmail - Const account detail of Admin
const AdminEmailAddress string = "booking.mylearningplace@gmail.com"
const AdminEmailPassword string = "rootroot"

//// UserEmail - Const account detail of Test User
const UserEmailAddress string = "testuser.mylearningplace@gmail.com"

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
		"SearchTeacher":    []byte(`{"data":[{"ID":6,"Name":"John Matthews","Age":50,"Profession":"Dentist","Experience":10,"Fees":23.5,"City":"Miami","Description":"Chess Tutor and FIDE Arbiter","Subject":"Chess, Chess Coach, Yoga","Education":"Dentistry (Sep, 2013–Jun, 2018) from Lebanese University","IsTeachesOnline":false,"IsTeachesOffline":true,"Rating":10,"CanCommute":false,"Bio":"Being Lebanese Chess Champion in my age category for more than 6 consecutive years, and becoming a registered FIDE Arbiter in the International Chess Federation only at the age of 20 years old, I have a passion in teaching this strategical game to every interested person, to discover the magic behind every tactic, every opening, every endgame, and every style in each player.\nI base my lesson firstly on famous games, to analyze every move and think for the upcoming moves. Moreover, I add middle game and endgame tactics, not to forget all kinds of tactics taking into consideration each student’s level (checkmates,sacrifices, pins...). Last but not least, what makes a player more confident in playing than a strong opening repertoire in which he or she can play anytime and against anyone with no fear of the opponent !\nWith successive lessons and practices, in addition to playing against real people rather than just a computer, and most importantly playing with the love for the game, with passion, I assure you that you can reach a chess rating you deserve with the least possible time.","ImagePath":"img/teacher/Teacher_6.jpg"}],"error":null,"rows_affected":1,"status":200}`),
		"GetSkills":        []byte(`{"data":[{"SkillName":"Basketball"},{"SkillName":"Music"},{"SkillName":"Yoga"},{"SkillName":"Chess"},{"SkillName":"Zumba"},{"SkillName":"Programming"},{"SkillName":"Cooking"}],"error":"","rows_affected":7}`),
	}
}
