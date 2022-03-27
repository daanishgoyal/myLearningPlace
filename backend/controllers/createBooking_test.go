package controllers

import (
	"testing"

	"github.com/gofiber/fiber/v2"
)

func TestCreateBooking(t *testing.T) {
	type args struct {
		c *fiber.Ctx
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := CreateBooking(tt.args.c); (err != nil) != tt.wantErr {
				t.Errorf("CreateBooking() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
