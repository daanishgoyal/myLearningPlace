package unittest

import (
	"backend/config"
	"gorm.io/gorm/utils"
	"io/ioutil"
	"net/http"
	"testing"
)

func TestGreeting(t *testing.T) {

	GetUrlToHit := config.APIRoutes()["Greetings"]
	//t.Log("Testing Greetings @ ", GetUrlToHit)
	request, error := http.NewRequest("GET", GetUrlToHit, nil)
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")

	if error != nil {
		t.Error(error)
	}

	client := &http.Client{}
	response, error2 := client.Do(request)
	if error2 != nil {
		t.Error(error)
	}
	defer response.Body.Close()

	outputResponse, error3 := ioutil.ReadAll(response.Body)
	if error3 != nil {
		t.Error(error3)
		t.Fail()
	}
	var expectedResponse = config.APIExpectedResponse()["Greetings"]

	if !utils.AssertEqual(outputResponse, expectedResponse) {
		t.Error("Assertion Failed. Output response doesn't matches the expected response.")
		t.Fail()
	}
}
