package database

import (
	"backend/models"
	"golang.org/x/crypto/bcrypt"
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
	allSkills := [7]string{"Basketball", "Music", "Yoga", "Chess", "Zumba", "Programming", "Cooking"}
	var skills []models.Skill

	for i := 0; i < len(allSkills); i++ {
		skills = append(skills, models.Skill{SkillName: allSkills[i]})
	}
	DB.Create(&skills)
}

func PopulateTeachers() {
	const teachercount int = 7

	var names = [teachercount]string{"Bertie Yates", "Hester Hogan", "Larry Little", "Sean Walsh", "Lola Gardner", "John Matthews", "Judy King"}
	var age = [teachercount]uint{29, 32, 36, 34, 29, 50, 24}
	var profession = [teachercount]string{"Yoga teacher", "Yoga teacher", "Yoga teacher", "Yoga teacher", "Yoga teacher", "Master", "Astronaut"}
	var experience = [teachercount]float32{5, 3.5, 4, 8, 4.5, 10, 1}
	var fees = [teachercount]float32{12, 13, 14, 16, 8, 23.5, 12.4}
	var cities = [teachercount]string{"Tampa", "Orlando", "Tampa", "Ocala", "Orlando", "Miami", "Ocala"}
	var descriptions = [teachercount]string{
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
		"I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
	}
	var subject = [teachercount]string{"Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate", "Yoga - beginner to intermediate"}
	var education = [teachercount]string{"MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria", "MS in physics (Aug, 2016–Jul, 2021) from University", "MS in physics (Aug, 2016–Jul, 2021) from University"}
	var isTeachesOnline = [teachercount]bool{true, false, true, false, true, false, true}
	var isTeachesOffline = [teachercount]bool{false, true, false, false, true, true, true}
	var rating = [teachercount]float32{7, 8, 5, 10, 9, 10, 5}
	var canCommute = [teachercount]bool{false, false, true, false, true, false, false}
	var bio = [teachercount]string{
		"Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Hester Hogan and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Larry Little and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Sean Walsh and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Lola Garden and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is John Matthews and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
		"Namaste, My name is Judy King and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
	}
	var imagepath = [teachercount]string{
		"img/teacher/Teacher_1.jpg",
		"img/teacher/Teacher_2.jpg",
		"img/teacher/Teacher_3.jpg",
		"img/teacher/Teacher_4.jpg",
		"img/teacher/Teacher_5.jpg",
		"img/teacher/Teacher_6.jpg",
		"img/teacher/Teacher_7.jpg",
	}

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
	const recordcount int = 40

	var skill_ids = [recordcount]uint{1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7}
	var teacher_ids = [recordcount]uint{1, 2, 4, 6, 7, 1, 2, 3, 5, 6, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 1, 2, 3, 6, 7, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7}

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
	const recordcount int = 36
	var days = [recordcount]string{
		time.Weekday(0).String(), time.Weekday(0).String(),
		time.Weekday(1).String(), time.Weekday(1).String(), time.Weekday(1).String(), time.Weekday(1).String(), time.Weekday(1).String(), time.Weekday(1).String(),
		time.Weekday(2).String(), time.Weekday(2).String(), time.Weekday(2).String(), time.Weekday(2).String(), time.Weekday(2).String(), time.Weekday(2).String(),
		time.Weekday(3).String(), time.Weekday(3).String(), time.Weekday(3).String(), time.Weekday(3).String(), time.Weekday(3).String(), time.Weekday(3).String(),
		time.Weekday(4).String(), time.Weekday(4).String(), time.Weekday(4).String(), time.Weekday(4).String(), time.Weekday(4).String(), time.Weekday(4).String(),
		time.Weekday(5).String(), time.Weekday(5).String(), time.Weekday(5).String(), time.Weekday(5).String(), time.Weekday(5).String(), time.Weekday(5).String(),
		time.Weekday(6).String(), time.Weekday(6).String(), time.Weekday(6).String(), time.Weekday(6).String(),
	}
	var startTimes = [recordcount]string{
		"10:00 AM", "11:30 AM",
		"10:00 AM", "11:30 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:30 PM",
		"10:00 AM", "11:30 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:30 PM",
		"10:00 AM", "11:30 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:30 PM",
		"10:00 AM", "11:30 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:30 PM",
		"10:00 AM", "11:30 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:30 PM",
		"10:00 AM", "11:30 AM", "12:00 PM", "4:00 PM",
	}
	var endTimes = [recordcount]string{
		"11:00 AM", "12:30 AM",
		"11:00 AM", "12:30 AM", "1:00 PM", "4:00 PM", "5:00 PM", "6:30 PM",
		"11:00 AM", "12:30 AM", "1:00 PM", "4:00 PM", "5:00 PM", "6:30 PM",
		"11:00 AM", "12:30 AM", "1:00 PM", "4:00 PM", "5:00 PM", "6:30 PM",
		"11:00 AM", "12:30 AM", "1:00 PM", "4:00 PM", "5:00 PM", "6:30 PM",
		"11:00 AM", "12:30 AM", "1:00 PM", "4:00 PM", "5:00 PM", "6:30 PM",
		"11:00 AM", "12:30 AM", "1:00 PM", "5:00 PM",
	}

	var slots []models.Slot
	for i := 0; i < recordcount; i++ {
		slots = append(slots, models.Slot{
			Day:       days[i],
			StartTime: startTimes[i],
			EndTime:   endTimes[i],
		})

	}
	DB.Create(&slots)
}

func PopulateContactDetails() {

	const recordcount int = 7

	var mobileNumber = [recordcount]string{"123456789", "098765432", "01234567", "01234567", "01234567", "01234567", "01234567"}
	var emailId = [recordcount]string{"email1@email.com", "email2@email.com", "email3@email.com", "email4@email.com", "email5@email.com", "email6@email.com", "email7@email.com"}
	var teacher_ids = [recordcount]uint{1, 2, 3, 4, 5, 6, 7}

	var tempCD []models.ContactDetails
	for i := 0; i < recordcount; i++ {
		tempCD = append(tempCD, models.ContactDetails{
			Teacher_MobileNumber: mobileNumber[i],
			Teacher_Email:        emailId[i],
			TeacherID:            teacher_ids[i],
		})

	}
	DB.Create(&tempCD)

}

func PopulateTeacherSchedule() {

	const recordcount int = 7

	var slotid = [recordcount]uint{1, 2, 3, 4, 5, 6, 7}
	var availability = [recordcount]bool{true, false, true, false, true, false, true}
	var teacher_ids = [recordcount]uint{1, 2, 3, 4, 5, 6, 7}

	var tempTeacherSch []models.TeacherSchedule
	for i := 0; i < recordcount; i++ {
		tempTeacherSch = append(tempTeacherSch, models.TeacherSchedule{
			SlotId:       slotid[i],
			Availability: availability[i],
			TeacherID:    teacher_ids[i],
		})

	}
	DB.Create(&tempTeacherSch)

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
	PopulateContactDetails()
	PopulateTeacherSchedule()
}
