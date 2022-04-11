package controllers

import (
	"backend/config"
	"bytes"
	"fmt"
	"gopkg.in/gomail.v2"
	"html/template"
	"log"
)

type HtmlRenderBookingDetails struct {
	FirstName     string
	Name          string
	TeacherName   string
	Skill         string
	Day           string
	Date          string
	SlotStartTime string
	SlotEndTime   string
	BookingID     uint
}

func parseHTML(details BookingDetails) string {
	bookingDetails := HtmlRenderBookingDetails{
		FirstName:     details.UserFirstName,
		BookingID:     details.BookingId,
		Name:          details.UserName,
		TeacherName:   details.TeacherName,
		Skill:         details.SkillName,
		Day:           details.SlotDay,
		Date:          details.SlotDate,
		SlotStartTime: details.SlotStartTime,
		SlotEndTime:   details.SlotEndTime,
	}

	var t *template.Template
	tParsed, err := t.ParseFiles("templates/email_template.html")
	if err != nil {
		panic(err)
		return err.Error()
	}

	buff := new(bytes.Buffer)
	err = tParsed.Execute(buff, bookingDetails)
	if err != nil {
		panic(err)
		return err.Error()
	}
	fmt.Println(buff.String())
	return buff.String()
}

func SendHTMLEmail(details BookingDetails) error {
	body := parseHTML(details)

	log.Println(body)
	subject := "Booking Confirmed, " + details.UserFirstName + "!"

	var to string
	to = details.UserEmail
	to = "amanpathak2909@gmail.com"

	new_email := gomail.NewMessage()
	new_email.SetHeader("From", config.EmailAddress)
	new_email.SetHeader("To", to)

	new_email.SetHeader("Subject", subject)

	new_email.SetBody("text/html", body)
	new_dialer := gomail.NewDialer(
		config.SmtpHost,
		config.SmtpPort,
		config.EmailAddress,
		config.EmailPassword)

	err2 := new_dialer.DialAndSend(new_email)
	if err2 != nil {
		return err2
	}
	return nil
}
