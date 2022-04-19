package unittest

import (
	"backend/config"
	"gopkg.in/gomail.v2"
	"testing"
)

func TestSendEmail(t *testing.T) {
	subject := "UnitTest_SendEmail"
	to := config.UserEmailAddress

	new_email := gomail.NewMessage()
	new_email.SetHeader("From", config.AdminEmailAddress)
	new_email.SetHeader("To", to)

	new_email.SetHeader("Subject", subject)

	new_email.SetBody("text/plain", "UnitTest_Passed. Email delivered_successfully!")
	new_dialer := gomail.NewDialer(
		config.SmtpHost,
		config.SmtpPort,
		config.AdminEmailAddress,
		config.AdminEmailPassword)

	err := new_dialer.DialAndSend(new_email)
	if err != nil {
		t.Error(err)
		t.Fail()
	}
}
