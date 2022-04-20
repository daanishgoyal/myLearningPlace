# Sprint 4

### Video Links:

Frontend and Backend Demo - 
<iframe width="560" height="315" src="https://www.youtube.com/embed/YSyotp1k4BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

test case and updated the screenshot after running tests



### Overall Progress
- Added more features to enhance the user experience. 
- Added features like cancelling the booked appointment, sending personal note to teacher while booking an appointment, sending confirmation email with appointment details to the user after booking an appointment, and being able to send an email to teacher just by clicking on email id of teacher and also being able to call the phone number by clicking on the phone number of the teacher.
- Redesigned the user interface of the comments section for a better UI experience for the user.


### React - Frontend Progress
- Cancelling the Booked Appointment- Users can cancel the booked appointments by visting the booking history section. After clicking on cancel appointment, application prompts the user to confirm the appointment with either Yes or No. If the user clicks on Yes, the appointment will be cancelled and confirmation message will be displayed stating "Your Booking has been cancelled succesfully". If the user clicks on No, the appointment will not be cancelled.
- Personal Note to Teacher while booking- Users can send a personal note to the teacher while booking the appointment. A text-box to send any personal message will be displayed in the booking modal dialog while selcting the date and time. For example, if a user is expecting to focus more on cardio than strength training, then while booking an appointment for weight loss, the user can send the message to that teacher while booking the appointment itself.
- Sending an email to teacher- User can send an email to the teacher directly from the teacher specific page itself by clicking on email address located beneath the contact details displayed. After clicking on the email address, the corresponding default email application configured on that computer will be opened.
- Calling a teacher: Users can call the teacher directly from the application itself by clicking on the phone number. After clicking on the phone number, it opens the face time or corresponding default application configured in the system and initiates a call through it.
- Redesigned UI using material UI and Redesigned  Teacher Specific page by updating comments section and  also updated Booking History page.
- Added test cases using cypress and Jest.
- Added integration test cases using Cypress. End to end functionality were tested using Cypress. Cypress tests were written and done for:
    - Booking cancellation feature
    - Personal note to teacher feature
    - Email and call feature by clicking on respective contact details
    
- Added Unit tests  with Jest. Specific features were tested using Jest. Test cases were written and done for:
    - Teacher specific page
    - Cancellation of booked appointment
    
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
![cypress_test](https://raw.githubusercontent.com/daanishgoyal/myLearningPlace/main/frontend/src/images/img/cypress_sprint4.png)

### Cypress Test Video

Link : 
<iframe width="560" height="315" src="https://www.youtube.com/embed/SH3PCLiljhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Jest Unit Tests - Frontend
Steps to run :-
```
cd frontend
npm run test
```
Output:
![unit_test_frontend](https://raw.githubusercontent.com/daanishgoyal/myLearningPlace/main/frontend/src/images/img/jest_tests_sprint4.png)




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

In this sprint, our focus were:
1. To extend the features of the platform.
    a. CancelBooking API
    b. Confirmation Email on Booking
2. Package the backend for deployment

**CancelBooking API**
- We introduced another supporting feature, cancel an appointment. With this a user can cancel any appointment which they have booked, but have changed their minds to not attend it. After a successful cancellation, the previously booked slot is freed and open for other user.
- The features is one of the key features on a booking portal, as this provides both the teacher and users the flexibility to alter their changes

- This feature is achieved with the CancelBookingAPI.

**Confirmation Email on Booking**
- We introduced another supporting feature, confirmation email on succeeful booking. With this a confirmation email containing the details of the booking is sent to the user which signals the user that their booking is confirmed.
- The details of the booking contains the following:
    * **BookingID**: The booking ID of the appointment
    * **Name**: Name of the user
    * **Teacher**'s Name: Name of the teacher
    * **Skill**: Name of Skill the user wishes to learn
    * **Day**: WeekDay of the appointment
    * **Date**: Date of the appointment
    * **Timings**: Timing of the appointment
    * **Additional** Note: Any note that user entered during booking
    
- The screenshot of the mail is attached below:

![pc_screenshot](https://github.com/daanishgoyal/myLearningPlace/blob/main/backend/img/pc_email_confirmation.png?raw=true)

![phone_screenshot](https://github.com/daanishgoyal/myLearningPlace/blob/main/backend/img/mobile_email_confirmation.jpg?raw=true)

**Other tasks**
- Updated the responses of createBookingAPI and searchBookingAPI to accomodate new changes developed for the cancelBookingAPI
- Extended the previously deployed unittest to cover the newly created models to check for any empty table.
- Added unittests to check the following:
    *  Validation test for Parsing Email address
    *  Validation test for checking whether confirmation emails can be sent
    

### API documentation of backend services

Below are the API documentation of the services introduced in this sprint:



