package database

import (
	"backend/config"
	"backend/models"
	"log"
	"strconv"
	"time"

	"golang.org/x/crypto/bcrypt"
)

func PopulateUsers() {
	const usercount int = 4

	var firstnames = [usercount]string{"Tom", "Richard", "Jamie", "Tester_Bob"}
	var lastnames = [usercount]string{"Taylor", "Roy", "Jones", "Bobby"}
	var emails = [usercount]string{"email_1@gmail.com", "email_2@gmail.com", "email_3@gmail.com", "testuser.mylearningplace@gmail.com"}
	var basePassword = "password"
	var users = []models.User{}

	for i := 0; i < usercount; i++ {
		password := []byte(basePassword + "_" + strconv.Itoa(i+1))
		hash, _ := bcrypt.GenerateFromPassword(password, config.PasswordCost)

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

	var names = [teachercount]string{"Bertie Yates", "Hester Hogan", "Larry Little", "Sean Walsh", "Lola Gardener", "John Matthews", "Judy King"}
	var age = [teachercount]uint{29, 32, 36, 34, 29, 50, 24}
	var profession = [teachercount]string{"Pilates Trainer", "Meditation Practitioner", "Weight Loss Coach", "Programming Teacher", "Fast Food Worker", "Dentist", "Astronaut"}
	var experience = [teachercount]float32{5, 3.5, 4, 8, 4.5, 10, 1}
	var fees = [teachercount]float32{12, 13, 14, 16, 8, 23.5, 12.4}
	var cities = [teachercount]string{"Tampa", "Orlando", "Tampa", "Ocala", "Orlando", "Miami", "Ocala"}
	var descriptions = [teachercount]string{
		"Mat Pilates training certified from Yoga alliance international",
		"I am a trained vipasana meditator. I have taken training from Vipasana International Meditation centre, Mumbai- India",
		"Certified Weight Loss Coach. I am Certified from LA Fitness Trainining Institute-LA",
		"Instructor I (Dec, 2013–Present) at Nueva Vizcaya State University\nTeaching Programming Subjects using java,c++, python and VB.NET programming languages.",
		"Trained Flutist, learning Music from USC, LA,CA.",
		"Chess Tutor and FIDE Arbiter",
		"Singer, Stage show Artist",
	}
	var subject = [teachercount]string{
		"Pilates & Yoga - Beginner, intermediate and Advanced",
		"Yoga & Meditation - beginner to intermediate",
		"Weight Loss training through Yoga - beginner to intermediate",
		"Information Technology, Computer Science",
		"Flute Teacher, Music, Zumba",
		"Chess, Chess Coach, Yoga",
		"Singer, Female Playback Singer"}

	var education = [teachercount]string{
		"MS in Computer Science (Aug, 2014–Jul, 2019) from University of Alabama, Birmingham-USA",
		"MS in Aeronautical Engineering (Aug, 2015–Jul, 2020) from University of Daytona, FL-USA",
		"MBA from ISB (Aug, 2017–June, 2019) from Indian School of Business, India",
		"Master in Information Technology (Jun, 2017–Sep, 2020) from Isabela State University/Echague Isabela",
		"Classical Flute Performance (Aug, 2020–now) from University of Southern California, Los Angeles, CA USA",
		"Dentistry (Sep, 2013–Jun, 2018) from Lebanese University",
		"Hindustani Classical Vocal (Oct, 2020–now) from Shankar Mahadev Academy\nHindustani Classical Voice Training and Light music (May, 2016–Dec, 2018) from Individual Teacher Mumbai\nHindustani Classical (Aug, 2012–Jun, 2014) from Ajivasan"}

	var isTeachesOnline = [teachercount]bool{true, false, true, false, true, false, true}
	var isTeachesOffline = [teachercount]bool{false, true, false, false, true, true, true}
	var rating = [teachercount]float32{7, 8, 5, 10, 9, 10, 5}
	var canCommute = [teachercount]bool{false, false, true, false, true, false, false}
	var bio = [teachercount]string{
		"Hi, I'm Bertie Yates and I am a Pilates and yoga teacher. In the field of fitness I am associated for more than 5 years now. I'm a LEVEL 4 PERSONAL TRAINER recognized from EREPS(European Registrar of Exercise Professionals) and a CERTIFIED NUTRITIONIST from ACE(American Council On Exercise). My scope of training is really vast which included posture correction, lifestyle management, fat loss, muscle gain, performance enhancement to lower back pain rectification. My guidance includes both in terms of exercise and also with diet.",
		"Hey, Go getter! I'm a highly motivated yoga instructor with people of all ages and has deep knowledge about Asana . I can instruct the student with correct posture and help them to improve the posture if they have any difficulty, and also can give variations if any . I can give students In depth understanding of breathing techniques and informing the precautions before doing any Asana. And also I can provide guided meditation to help students for connect with their highest self. Giving relaxation before and end of the each class to focus more about body and mind.",
		"I’m a professional trainer. I use to train ppl based on thr goals. It depends on how they want to train. I’m expert in Strength training, bodyweight training, weight loss. And I’m more expert in functional training. This will help ppl to improve strength, endurance and posture. I use to train ppl according to thr needs and goals. I will advice them with basic diet and help them to achieve goals. I can take online classes and offline it is totally depends on the client. I’m willing to travel.",
		"Namaste, My name is Sean Walsh. I am a College Instructor since 2013. I handled programming subjects (c++, java,python and vb.net). I assigned to teach fundamentals of programming to all the beginners of our course, BSIT,BSCS and BSIS. I always make sure that they understand every topic. I have the passion to teach so I enjoy teaching. The results of my teaching is, I am consistently received \"outstanding\" evaluation from my students. This is my first time to apply as an online teacher. I can also help you to your assignments and I will do the best that I can to deliver quality education. I am a hardworking teacher, currently I have a full time job but I also seeking some other sources to maximize my ability to teach and also to earn some cash. I can be your friend, a teacher, and a sister once you gave me an opportunity to be your instructor or a tutor. A good teacher, teaches from the heart and I apply it to my teaching method so that my students can learn from me. ",
		"Hello! My name is Lola Gardener. I am currently studying classical flute performance at USC Thornton school of music. I have been playing flute for 8 years and it has allowed me the opportunity to play at renown venues like Carnegie Hall as well as win and place in state wide and national competitions. I am very passionate about flute and I love to share that passion through teaching. I enjoy teaching any age and meeting the students where they are at. My goal for students is help them progress at their pace while instilling a self discipline and passion for music.",
		"Being Lebanese Chess Champion in my age category for more than 6 consecutive years, and becoming a registered FIDE Arbiter in the International Chess Federation only at the age of 20 years old, I have a passion in teaching this strategical game to every interested person, to discover the magic behind every tactic, every opening, every endgame, and every style in each player.\nI base my lesson firstly on famous games, to analyze every move and think for the upcoming moves. Moreover, I add middle game and endgame tactics, not to forget all kinds of tactics taking into consideration each student’s level (checkmates,sacrifices, pins...). Last but not least, what makes a player more confident in playing than a strong opening repertoire in which he or she can play anytime and against anyone with no fear of the opponent !\nWith successive lessons and practices, in addition to playing against real people rather than just a computer, and most importantly playing with the love for the game, with passion, I assure you that you can reach a chess rating you deserve with the least possible time.",
		"Music is Life, when you let it in through your breaths.. Music is all there is.\"\nI'm a passionate Singer who believes that Singing isn't a skill, but the voice and expression of one's own heart. I have more than 6 years of formal Hindustani Classical training from Ajivasan, India (Suresh Wadkar's Music Academy) and other renowned Indian musicians.\n\nHere's the structure of my class:\n1) We'll do a warm up, starting with om chanting and Alankaars or swara patterns.\n2) 10 mins of song exploration based on your interests. For Classical music, we'll discuss fundamentals of Raaga and compositions.\n3) 30 min vocal practice where we will focus on internalizing the concepts and building memory .\n4) 10 min reviewing and providing feedback and practice plan.\n\nIf you want to experience the beauty of Indian melody and sing along to the tunes of beautiful Indian compositions: classical and Light Music, join my class! I prefer 1:1 classes or group batches of no more than 2 students.\n\nSo excited to get started with you on a musical journey!",
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

	const recordcount int = 50

	var slotid = [recordcount]uint{1, 12, 6, 7, 32, 1, 32, 4, 11, 34, 7, 1, 22, 28, 11, 32, 7, 16, 15, 2, 24, 25, 5, 7, 9, 6, 1, 4, 11, 15, 25, 8, 2, 9, 22, 11, 29, 31, 19, 34, 35, 15, 11, 8, 28, 29, 2, 4, 34, 36}
	var teacher_ids = [recordcount]uint{1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7}
	var availability = [recordcount]bool{true, false, true, false, true, true, false, true, true, false, false, false, false, true, true, true, true, true, false, true, true, true, true, true, true, false, true, false, false, true, true, true, true, true, true, true, false, true, true, false, true, false, false, true, true, true, true, true, true, true}
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

func PopulateBookings() {
	location := time.Now().Location()
	const recordcount int = 15
	var skillId = [recordcount]uint{1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 7}
	var teacherId = [recordcount]uint{1, 2, 7, 2, 3, 1, 4, 2, 5, 4, 6, 6, 3, 5, 7}
	var slotId = [recordcount]uint{12, 32, 11, 34, 1, 7, 6, 7, 4, 15, 29, 34, 22, 11, 15}
	var userId = [recordcount]uint{1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3}
	var datebooked = [recordcount]time.Time{
		time.Date(2022, 03, 26, 0, 0, 0, 0, location),
		time.Date(2022, 03, 26, 0, 0, 0, 0, location),
		time.Date(2022, 02, 26, 0, 0, 0, 0, location),
		time.Date(2022, 03, 12, 0, 0, 0, 0, location),
		time.Date(2021, 12, 01, 0, 0, 0, 0, location),
		time.Date(2022, 04, 06, 0, 0, 0, 0, location),
		time.Date(2022, 02, 27, 0, 0, 0, 0, location),
		time.Date(2022, 03, 02, 0, 0, 0, 0, location),
		time.Date(2022, 03, 26, 0, 0, 0, 0, location),
		time.Date(2023, 03, 26, 0, 0, 0, 0, location),
		time.Date(2022, 03, 26, 0, 0, 0, 0, location),
		time.Date(2022, 03, 29, 0, 0, 0, 0, location),
		time.Date(2022, 03, 24, 0, 0, 0, 0, location),
		time.Date(2022, 04, 22, 0, 0, 0, 0, location),
		time.Date(2022, 03, 26, 0, 0, 0, 0, location),
	}
	var bookingMessage = [recordcount]string{"message1", "message2", "message3", "message4", "message5", "message6", "message7", "message8", "message9", "message10", "message11", "message12", "message13", "message14", "message15"}

	var booking []models.Booking
	for i := 0; i < recordcount; i++ {
		booking = append(booking, models.Booking{
			SkillID:        skillId[i],
			TeacherID:      teacherId[i],
			UserID:         userId[i],
			SlotID:         slotId[i],
			DateBooked:     datebooked[i],
			BookingMessage: bookingMessage[i],
		})

	}
	DB.Create(&booking)

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
	PopulateBookings()
}
