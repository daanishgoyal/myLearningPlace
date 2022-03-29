package config

import "time"

const SqlUserName string = "root"
const SqlPassword string = "logmein1"
const SqlDatabaseName string = "BackEnd"

// Const Map
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
