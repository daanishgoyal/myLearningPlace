# Sprint 3

### Video Links:

Frontend and Backend Demo - https://www.youtube.com/watch?v=mJVc1hljB4Y




### Overall Progress
- Added More features to enhance the user experience. 
- Added features like Rating, Booking Appointment,teacher schedule Accessing contact details for a authenticated user, Booking Confirmation, Booking History, last booked appointment details and comments section.
- Redesigned the whole UI for better UI experience.


### React - Frontend Progress

- Rating Feature:  Added rating feature. User can able to see the rating of the teacher in teachers page and also in teacher specific page.
- Contact Details Feature : User can see Contact details button in Teacher Specific Page. But to access the contact details he or she has to login with credentials then only he or she can access. After clicking on Contact Details button it redirects to login page and after successful login it redirects to Teacher Specific Page and displays contact details like phone number and email id.
- Book Appointment Feature: User can see Book appointment button in Teacher Specific Page. But to avail the feature he or she has to login with credentials.After clicking on book appointment button it redirects to login page and after succesful login user can access the feature.
- Teacher schedule feature: After clicking on book appointment, user can able to see the teacher schedule.
- From the available teacher schedule user can select a day and a time slot.
- After selecting the day and slot based on user preference, user can click on confirm booking button.
- Booking confirmation feature: After clicking on confirm booking button, confirmation pop up comes whether the booking was succesful or failure.
- Last Booking appointment Details feature: In the teacher specific page itself, below the book appointment button, user can see the last booking details with complete information like date, skill and slot details.
- Comments feature: In the teacher specific page, user can able to see comments about the particular teacher from various users. This feature can be accessed by the user even if he or she does not logs into the system also.
- Booking History feature: Complete Booking History for a user can be accessed by clicking on drop down next to user name on Top Navbar.
- Redesigned UI using material UI and Redesigned Teacher Page Teacher Specific page and Booking History.
- Added test cases using cypress and Jest.
- Added integration test cases using Cypress. End to end functionality were tested using Cypress. Cypress tests were written and done for:
    - Booking history component
    - Comments component
    - Book Appointment component
    - Protected Route components getting redirected to login page
    - Components getting redirected to the page they were in before logging in
- Added Unit tests  with Jest. Specific features were tested using Jest. Test cases were written and done for:
    - Individual teacher component
    - Last Booking Status display check
    - Comments getting populated
    - Booking history getting populated
    - Profile Information getting populated

### How To Run
Steps:-
```
cd frontend
npm install
npm start
```

### Cypress Tests
Steps:-
```
cd frontend
npm install cypress
```
In package.json :-
```
"scripts": {
    [....]
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "cypress": "cypress open"
  },
```
To Run :-
```
cd frontend
npx run cypress
```
Output:-
![cypress_test](https://github.com/daanishgoyal/myLearningPlace/blob/main/frontend/src/images/img/BookingHistory_Cypress_Sprint3.png?raw=true)

### Jest Unit Tests - Frontend
Steps to run :-
```
cd frontend
npm run test
```
Output:
![unit_test_frontend](https://github.com/daanishgoyal/myLearningPlace/blob/main/frontend/src/images/img/UnitTests_Sprint3.png?raw=true)

### Go-Lang backend progress


### Unit tests Backend
Steps to run :-
```
cd backend
go test -v 
```

To enable verbose, run `go test -v ./unittest`
Output:-

![back_end_unit_tests](https://github.com/daanishgoyal/myLearningPlace/blob/main/backend/unittest/unittest_passed_sprint_3.png?raw=True)

In this sprint, our focus was to extend the features of the platform.

- We introduced the most important feature, book an appointment feature. With this a user can book an appointment with any teacher, for a skill at a certain slot time. We implemented the booking feature using two APIs. 
    - CreateBooking
    - SearchBookingbyUserId
    
    CreateBooking API enables the user to register for any appointment, given that slot is empty. If no slots are empty, then the user needs to wait for a week to book the appointment. The user is displayed a confirmation message on a successful booking
    
    SearchBookingbyUserID API enables to search all the appointments registered by a certain user. This means appointments that are upcoming and completed in the past. With the `includePast (bool)` param the response can filtered the past appointments and display only the ones that are upcoming.

- For the booking, we created models for Slots, TeacherSchedule as well. 
    - The Slots model contained various slots on which an appointment can take place. It consists of a `slotsID`,`slotStartTime`, `slotEndtime` and `slotDay`. 
    - The TeacherSchedule is a relation model that assigns teacher with their respective slots. A teacher can have many slots and a slots can be assigned to many teachers.

- Added the contactDetails API, that returned contactDetails such as phone number and email address of the teacher, so that the user can shoot any query to the teacher directly.

- Extended the previously deployed unittest to cover the newly created models to check for any empty table.

- Exposed an API, getSkillIdbyName, which returned the SkillId of the skill to proceed with a booking when a used wished to book an appointment.

- Added unittests to check the following:
    - Acceptance test for GetSkills API
    - Acceptance test for Greeting API
    - Acceptance test for SearchTeacher API
    - Acceptance test for GetSkillIdbyName API
    

### Api documentation of backend services

Below are the API documentation of the ne

<h3> Get Misc Images</h3>
    <p><br>
        This API is used to send the Images of all the present teachers in the database so that they can be displayed alongside the other information. 
    </p>
    
<h4>Target URL </h4>
    
    localhost:8080 +/api/getMiscImages
   
<h4>Request Method   </h4>
    
    Get
  
<h4>Response    </h4>
    
    {"data": result}


<h3>  createBooking  </h3>
    <p><br>
        This API is used to create/register a new booking appointment
    </p>
    
<h4>Target URL </h4>
   
    localhost:8080 +/api/booking/create

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Header </h4>

```json
{
    "userId" : "3",
    "teacherId" : "2",
    "skillId" : "4",
    "slotId" : "2"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| userId | The Id of the user  | string |
| teacherId | The Id of the teacher| string | 
| skillId | The Id of the skill | string |
| slotId | The Id of the slot | string |

  
<h4> Response Examples </h4>
<h4> Case #1 - Booking Created Successfully </h4>

> ```json
> {
>     "data": {
>         "BookingId": 31,
>         "UserId": 3,
>         "TeacherId": 2,
>         "SkillId": 4,
>         "SlotId": 2,
>         "UserName": "XYZ LMN",
>         "TeacherName": "Hester Hogan",
>         "SkillName": "Chess",
>         "SlotStartTime": "11:30 AM",
>         "SlotEndTime": "12:30 AM",
>         "SlotDay": "Sunday",
>         "SlotDate": "2022-03-27"
>     },
>     "error": null,
>     "rows_affected": 1,
>     "status": 200
> }
> ```     

<h4> Case #2 - Booking Failed due to Invalid data in the request payload </h4>

> ```json
> {
>     "message": "Data Validation failed. Booking failed.",
>     "error": "Not Acceptable",
>     "status": 406
> }
> ``` 


<h4> Response Fields </h4>

| Field Name  | Description |  Datatype | Remarks |
| ------------- | ------------- | ------------- | ------------- |
| data | Consists of the data entries created in the database | json | If the status is 200 |
| error | Returns if any error caused while registering | error | Null, if no error is raised | 
| message | Returns an error message/ status message | string | Null, if no error is raised | 
| status | Status Code  | int | 200/406 | 



<h3>  SearchBookingbyUserId  </h3>
    <p><br>
        This API is used to search the booking appointments booked under by a user
    </p>
    
<h4>Target URL </h4>
   
    localhost:8080 +/api/booking/search/userid

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Header </h4>

```json
{
    "userId" : "1",
    "includePast" : "true"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| userId | The Id of the user for which we aim to find the booking  | string |
| includePast | if set to false, the search would show only upcoming bookings and discard the past bookings | string - boolean | 

  
<h4> Response Examples </h4>
<h4> Case #1 - `includePast = False` </h4>

> ```json
> {
>     "data": [
>         {
>             "UserName": "ABC DEF",
>             "TeacherName": "Bertie Yates",
>             "SkillName": "Basketball",
>             "SlotStartTime": "3:00 PM",
>             "SlotEndTime": "4:00 PM",
>             "SlotDay": "Tuesday",
>             "SlotDate": "2022-03-26"
>         },
>         {
>             "UserName": "ABC DEF",
>             "TeacherName": "Hester Hogan",
>             "SkillName": "Music",
>             "SlotStartTime": "5:30 PM",
>             "SlotEndTime": "6:30 PM",
>             "SlotDay": "Friday",
>             "SlotDate": "2022-03-26"
>         }
>     ],
>     "error": null,
>     "includePast": false,
>     "rows_affected": 2,
>     "status": 200
> }
> ```     

<h4> Case #2 - `includePast = True` </h4>

> ```json
> {
>     "data": [
>         {
>             "UserName": "ABC DEF",
>             "TeacherName": "Bertie Yates",
>             "SkillName": "Basketball",
>             "SlotStartTime": "3:00 PM",
>             "SlotEndTime": "4:00 PM",
>             "SlotDay": "Tuesday",
>             "SlotDate": "2022-03-26"
>         },
>         {
>             "UserName": "ABC DEF",
>             "TeacherName": "Hester Hogan",
>             "SkillName": "Music",
>             "SlotStartTime": "5:30 PM",
>             "SlotEndTime": "6:30 PM",
>             "SlotDay": "Friday",
>             "SlotDate": "2022-03-26"
>         },
>         {
>             "UserName": "ABC DEF",
>             "TeacherName": "Larry Little",
>             "SkillName": "Yoga",
>             "SlotStartTime": "10:00 AM",
>             "SlotEndTime": "11:00 AM",
>             "SlotDay": "Sunday",
>             "SlotDate": "2021-12-01"
>         }
>     ],
>     "error": null,
>     "includePast": true,
>     "rows_affected": 3,
>     "status": 200
> }
> ``` 


<h4> Response Fields </h4>

| Field Name  | Description |  Datatype | Remarks |
| ------------- | ------------- | ------------- | ------------- |
| data | Consists of the data entries created in the database | json | If the status is 200 |
| includePast | Consists of the boolean value sent in the request | boolean | |
| error | Returns if any error caused while registering | error | Null, if no error is raised | 
| rows_affected | Returns the number of bookings found | int | | 
| status | Status Code | int | 200/404 | 



<h3> Get Teacher Schedule </h3>
    <p><br>
        This API is used to send the list of all available booking slots that are available for every teacher. 
    </p>
    
<h4>Target URL </h4>
    
    localhost:8080 +/api/getTeacherSchedule
   
<h4>Request Method   </h4>
    
    POST
  
<h4>Request Header </h4>
    
    {"teacher": 1}
       
<h4> Request Fields </h4>
    
| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| teacher_id | The id of the teacher | int |

<h4> Response Examples </h4>


**Response body**

> ```json
> {
>     "data" : [
>        {
>            "SlotID" : 1,
>	         "Day" : "Monday",
>	         "StartTime" : "5:00PM",
>            "EndTime" : "5:30PM",
>	         "Date" : 23/12/2022,
>        }
>    ]
>     "error": null,
>     "rows_affected": 1
> }
> ```
