package models

type Comments struct {
	CommentBy   string
	CommentText string
	TeacherID   uint
	Teacher     Teacher
}
