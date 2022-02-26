package database

import (
	"backend/models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/datatypes"
	"log"
	"strconv"
	"time"
)

func PopulateUsers() {
	const usercount int = 3

	var firstnames = [usercount]string{"ABC", "PQR", "XYZ"}
	var lastnames = [usercount]string{"DEF", "EFG", "LMN"}
	var emails = [usercount]string{"email_1@gmail.com", "email_2@gmail.com", "email_3@gmail.com"}
	var basePassword = "password"
	var users = []models.User{}

	for i := 0; i < usercount; i++ {
		password := []byte(basePassword + "_" + strconv.Itoa(i+1))
		hash, _ := bcrypt.GenerateFromPassword(password, 14)

		users = append(users, models.User{
			FirstName: firstnames[i],
			LastName:  lastnames[i],
			Email:     emails[i],
			Password:  hash,
		})
	}
	result := DB.Create(&users)
	log.Println(result.Error, result.RowsAffected)
}

func PopulateSkills() {
	allSkills := [5]string{"Basketball", "Music", "Yoga", "Chess", "Zumba"}
	var skills []models.Skill

	for i := 0; i < len(allSkills); i++ {
		skills = append(skills, models.Skill{SkillName: allSkills[i]})
	}
	DB.Create(&skills)
}

func PopulateTeachers() {
	const teachercount int = 5

	var names = [teachercount]string{"Bertie Yates", "Hester Hogan", "Larry Little", "Sean Walsh", "Lola Gardner"}
	var age = [teachercount]uint{29, 32, 36, 34, 29}
	var profession = [teachercount]string{"Yoga teacher", "Yoga teacher", "Yoga teacher", "Yoga teacher", "Yoga teacher"}
	var experience = [teachercount]float32{5, 3.5, 4, 8, 4.5}
	var fees = [teachercount]float32{12, 13, 14, 16, 8}
	var cities = [teachercount]string{"Tampa", "Orlando", "Tampa", "Ocala", "Orlando"}
	var descriptions = [teachercount]string{
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
	}
	var subject = [teachercount]string{"Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate"}
	var education = [teachercount]string{"MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria"}
	var isTeachesOnline = [teachercount]bool{true, false, true, false, true}
	var isTeachesOffline = [teachercount]bool{false, true, false, false, true}
	var rating = [teachercount]float32{7, 8, 5, 10, 9}
	var canCommute = [teachercount]bool{false, false, true, false, true}
	var bio = [teachercount]string{
		"Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
	}
	var imagepath = [teachercount]string{"backend/img/Teacher_1.jpg", "backend/img/Teacher_2.jpg", "backend/img/Teacher_3.jpg", "backend/img/Teacher_4.jpg", "backend/img/Teacher_5.jpg"}

	var teachers []models.Teacher

	for i := 0; i < teachercount; i++ {
		teachers = append(teachers, models.Teacher{
			Name:             names[i],
			Age:              age[i],
			Profession:       profession[i],
			Experience:       experience[i],
			Fees:             fees[i],
			City:             cities[i],
			Description:      descriptions[i],
			Subject:          subject[i],
			Education:        education[i],
			Rating:           rating[i],
			IsTeachesOnline:  isTeachesOnline[i],
			IsTeachesOffline: isTeachesOffline[i],
			CanCommute:       canCommute[i],
			Bio:              bio[i],
			ImagePath:        imagepath[i],
		})
	}
	DB.Create(&teachers)

	//var photo = [usercount] image.Image {}
}

func Populate_Rel_Teachers_Skills() {
	const recordcount int = 6

	var skill_ids = [recordcount]uint{1, 2, 3, 1, 5, 4}
	var teacher_ids = [recordcount]uint{2, 1, 4, 5, 2, 1}

	var rel_t_s []models.Relation_t_s
	for i := 0; i < recordcount; i++ {
		rel_t_s = append(rel_t_s, models.Relation_t_s{
			SkillID:   skill_ids[i],
			TeacherID: teacher_ids[i],
		})

	}
	DB.Create(&rel_t_s)

}

func Populate_Comments() {
	const recordcount int = 25

	var commentby = [recordcount]string{"Sam", "Tim", "John", "Anakin", "Luke", "Ray", "Sam", "Tim", "John", "Anakin", "Luke", "Ray", "Sam", "Tim", "John", "Anakin", "Luke", "Ray", "Sam", "Tim", "John", "Anakin", "Luke", "Ray", "Sam"}
	var commentext = [recordcount]string{"Good", "okayish", "average", "ok", "ok", "ok", "Good", "okayish", "average", "ok", "ok", "ok", "Good", "okayish", "average", "ok", "ok", "ok", "Good", "okayish", "average", "ok", "ok", "ok", "Good"}
	var teacher_ids = [recordcount]uint{1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5}

	var tempComment []models.Comments
	for i := 0; i < recordcount; i++ {
		tempComment = append(tempComment, models.Comments{
			CommentBy:   commentby[i],
			CommentText: commentext[i],
			TeacherID:   teacher_ids[i],
		})

	}
	DB.Create(&tempComment)

}

func PopulateMiscImages() {
	const recordcount int = 3
	var imageCaption = [recordcount]string{"Background", "HomeInfo", "Logo"}
	var imagepath = [recordcount]string{"backend/img/misc/bgimage.jpg", "backend/img/misc/homeinfo.jpg", "backend/img/misc/logo.png"}

	var images []models.MiscImages
	for i := 0; i < recordcount; i++ {
		images = append(images, models.MiscImages{
			ImageCaption: imageCaption[i],
			ImagePath:    imagepath[i],
		})

	}
	DB.Create(&images)
}

func PopulateSlots() {
	const recordcount int = 2
	var dates = [recordcount]datatypes.Date{
		datatypes.Date(time.Date(2022, 01, 02, 0, 0, 0, 0, time.Local)),
		datatypes.Date(time.Date(2022, 02, 15, 0, 0, 0, 0, time.Local)),
	}

	var times = [recordcount]datatypes.Time{
		datatypes.NewTime(18, 30, 0, 0),
		datatypes.NewTime(10, 00, 0, 0),
	}

	var slots []models.Slots
	for i := 0; i < recordcount; i++ {
		slots = append(slots, models.Slots{
			Day:  dates[i],
			Time: times[i],
		})

	}
	DB.Create(&slots)
}

func PopulateDB() {
	// To be run only when database doesn't exists.

	PopulateUsers()
	PopulateTeachers()
	PopulateSkills()
	Populate_Rel_Teachers_Skills()
	Populate_Comments()
	PopulateMiscImages()
	PopulateSlots()
}
