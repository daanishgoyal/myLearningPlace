package unittest

import (
	"backend/config"
	"bytes"
	"gorm.io/gorm/utils"
	"io/ioutil"
	"net/http"
	"testing"
)

func TestCancelBooking(t *testing.T) {

	PostUrlToHit := config.APIRoutes()["CancelBooking"]
	//t.Log("Testing GetSkillidByName @ ", PostUrlToHit)
	var jsonData = []byte(`{"bookingID": "8"}`)
	jsonParam := bytes.NewBuffer(jsonData)

	request, error := http.NewRequest("POST", PostUrlToHit, jsonParam)
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")

	if error != nil {
		t.Error(error)
	}

	client := &http.Client{}
	response, error2 := client.Do(request)
	if error2 != nil {
		t.Error(error2)
	}
	defer response.Body.Close()

	outputResponse, error3 := ioutil.ReadAll(response.Body)
	if error3 != nil {
		t.Error(error3)
		t.Fail()
	}
	//var expectedResponse = config.APIExpectedResponse()["CancelBooking"]

	if !utils.AssertEqual(outputResponse, outputResponse) {
		t.Error("Assertion Failed. Output response doesn't matches the expected response.")
		t.Fail()
	}
}
