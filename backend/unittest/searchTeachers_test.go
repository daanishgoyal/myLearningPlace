package unittest

import (
	"backend/config"
	"bytes"
	"gorm.io/gorm/utils"
	"io/ioutil"
	"net/http"
	"testing"
)

func TestSearchTeacher(t *testing.T) {

	PostUrlToHit := config.APIRoutes()["SearchTeacher"]
	//t.Log("Testing SearchTeacher @ ", PostUrlToHit)
	var jsonData = []byte(`{"city" : "Miami","skill" : "Chess"}`)
	jsonParam := bytes.NewBuffer(jsonData)

	request, error := http.NewRequest("POST", PostUrlToHit, jsonParam)
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
	var expectedResponse = config.APIExpectedResponse()["SearchTeacher"]

	if !utils.AssertEqual(outputResponse, expectedResponse) {
		t.Error("Assertion Failed. Output repsonse doesn't matches the expected response.")
		t.Fail()
	}
}
