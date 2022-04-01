# Sprint 2

### Overall Progress
- For all the functionalities developed in the Sprint 1: that is Login,  search home page,teachers Page and teacher Specific Pages, We have integrated Front end with the Backend using API's.


### React - Frontend Progress

- Login Page, Signup page and Logout Feature implemented in integration with Backend.
- Signup and Login Feature: Once the user signs up, his or her username, password, first name and last name gets updated in the backend. Using the username and password credentials he or she can login to avail certain features which are accessible only when the user logs in.
- Redesigned UI using material UI and Redesigned login page, Sign up page, Search page, Teacher Page and Teacher Specific Page.
- Home Page redirect feature: Added Home Icon on left and when ever user clicks on Home icon it redirects to Home Page.
- Teachers Not Found page: Added Teachers Not Found Page in case if the teacher is not available for a particular skill and location. 
- Disabling Search Feature: If the user does not select atleast one of the skill or location, disabling search feature fuctionality is added.
- Selecting Skill and Location feature: Functionality for a User  to select one skill  from available skills and one location from available locations and then enabling search feature has been added.
- Teachers and Teacher Specific page: Functionality for Navigation to teachers page and then navigation to teacher specific page by clicking on more info has been added whcih in integration with Backend.
- Contact Details, Book Appointment and Comments section added in Teacher Specific Page.
- Added test cases using cypress and Jest.
- Added integration test cases using Cypress. End to end functionality were tested using Cypress. Cypress tests were written and done for:
    - Home page component
    - Teachers Card component
    - Teachers specific component
    - Search component getting populated
    - Search component yielding results and navigation to teachers page
- Added Unit tests  with Jest. Specific features were tested using Jest. Test cases were written and done for:
    - Home page component populating all lists
    - Intial search component disabled check
    - Login component username field should be autofocussed
    - Teachers not found page should render on unsuccessful search
    - Page not found component should render if route does not exist

### How To Run - Frontend
Steps:-
```
cd frontend
npm install
npm start
```

### Cypress Tests - Frontend
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
![cypress_test](https://github.com/daanishgoyal/myLearningPlace/blob/main/frontend/src/images/img/Login_Cypress_Sprint2.png?raw=true)

### Jest Unit Tests - Frontend
Steps to run :-
```
cd frontend
npm run test
```
Output:
![unit_test_frontend](https://github.com/daanishgoyal/myLearningPlace/blob/main/frontend/src/images/img/Unit_tests_sprint2.png?raw=true)


### Go-Lang backend progress


In this sprint, our main aim was the integration of the API with the frontend. 

- We finalized the structure of what our API request and response would look like. We decided that API response should be of the format:

| Field Name  | Description |  Datatype | Remarks |
| ------------- | ------------- | ------------- | ------------- |
| data | Consists the data entries generated in the database along with a unique ID | json | |
| error | Returns if any error caused while registering | error | Null, if no error is raised | 
| Rows Affected | the number of rows affected while insertion  | int |
| status | The status code of the request | int |

- We created models for the following tables:
    - Comments
    - Relation_Teacher_Skills

- Added validation checks in the API's for validating the input requests.
- Implemented the storage and easy retrival of images of teachers that are required for the frontend.
- Exposed the comments API, which facilitates the retrival the feedbacks for the teachers.
-  
- Added unit test cases for the following:
    - To check if the connection to DB is successful
    - To check if any table is empty
    - To check if the search API is working as expected
    - To check if the comments API is working as expected.

### Unit tests Backend
Steps to run :-
```
cd backend
go test ./unittest
```
To enable test verbose, you can execute `go test -v ./unittest` instead


Output:-

![back_end_unit_tests](https://github.com/daanishgoyal/myLearningPlace/blob/main/backend/unittest/unittest_passed_sprint_2.png?raw=True)



### **Api documentation of backend services**

<h3> Greetings  </h3>
    <p><br>
        This API is used check if the Back-End Server is up successfully and running.
    </p>
    
<h4>Target URL </h4>
    
    localhost:8080/
   
<h4>Request Method  </h4>
    Get
  
<h4> Response </h4>
    
    {"body": Hello, World!}
  


<h3>Register</h3>
    <p> <br>
        This API is used to register a new learner in the database. This API contains four parameters:
        <ol>
           <li> First Name
           <li> Last Name
           <li> Email Address
           <li> Password
        </ol>
    </p>
    
<h4>Target URL </h4>
    
`localhost:8080 +/api/register`

<h4>Request Type : </h4> <code>Post</code>

<h4> Request Header </h4>

```json
{
    "firstName" : "user_1",
    "lastName" : "surname_1",
    "email" : "email_1000@gmail.com",
    "password" : "password_1000"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype | Remarks |
| ------------- | ------------- | ------------- | ------------- |
| FirstName  | The first name of the user  | string | |
| LastName  | The last name of the user  | string | | 
| Email Address  | The email address of the user  | string | Email address should be unique |
| Password | The first name of the user  | string | Password is encrypted and then stored |
  
<h4> Response Example</h4>

```json
{
    "data": {
        "ID": 7,
        "FirstName": "user_1",
        "LastName": "surname_1",
        "Email": "email_1000@gmail.com",
        "Password": "JDJhJDEyJDJkL2lzRzBxVXYza2dXeE9mQ0tzU3VwREZDTjk5bHhmRDRIdjZ0bG1HeWgvMElwOWM5bm0y"
    },
    "error": null,
    "rows_affected": 1
}
```     

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype | Remarks |
| ------------- | ------------- | ------------- | ------------- |
| data | Consists the data entries generated in the database along with a unique ID | json | |
| error | Returns if any error caused while registering | error | Null, if no error is raised | 
| Rows Affected | the number of rows affected while insertion  | int |

   <h3> Login </h3>
    <p> <br>
        This API is used to login a learner that has previously registered in the database. This API accepts two parameters:
        <ol>
           <li> Email Address
           <li> Password
        </ol>
    </p>
    
<h4>Target URL </h4>
    
`localhost:8080 +/api/login`

<h4>Request Type : </h4> <code>Post</code>

<h4> Request Header </h4>

```json
{
    "email" : "email_1000@gmail.com",
    "password" : "password_1000"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| Email Address  | The email address of the user  | string |
| Password | The first name of the user  | string | 
  
<h4> Response Examples </h4>
<h4> Case #1 - User Validated Successfully </h4>

> ```json
> {
>     "data": {
>         "ID": 7,
>         "FirstName": "user_1",
>         "LastName": "surname_1",
>         "Email": "email_1000@gmail.com",
>         "Password": "JDJhJDEyJDJkL2lzRzBxVXYza2dXeE9mQ0tzU3VwREZDTjk5bHhmRDRIdjZ0bG1HeWgvMElwOWM5bm0y"
>     },
>     "error": null,
>     "message": "User Validated",
>     "status": 200
> }
> ```     

<h4> Case #2 - Email Address not found </h4>

> ```json
> {
>     "message": "Email address not found",
>     "error": "Not Found",
>     "status": 404
> }
> ``` 

<h4> Case #3 - Invalid Password </h4>

> ```json
> {
>     "message": "Incorrect password, user is unauthorized",
>     "error": "Unauthorized",
>     "status": 401
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype | Remarks |
| ------------- | ------------- | ------------- | ------------- |
| data | Consists the data entries retrieved from the database | json | If the status is 200 |
| error | Returns if any error caused while registering | error | Null, if no error is raised | 
| message | Returns an error message/ status message | string | Null, if no error is raised | 
| status | Status Code  | int | 200/401/404 | 


<h3> Search  </h3>
    <p> <br>
        This API is used to search teacher based on a city or a skill or both city and skill This API accepts one\two parameters:
        <ol>
           <li> City
           <li> Skill
        </ol>
    </p>
    
<h4>Target URL </h4>
    
`localhost:8080 +/api/search`

<h4>Request Type : </h4> <code>Post</code>

<h4> Request Header </h4>

```json
{
    "skill" : "Yoga",
    "city" : "Orlando"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| Skill | The name of the skill | string |
| City | City name  | string | 
  
<h4> Response Examples </h4>
<h4> Case #1 - Search by location </h4>
<p> This case searches teacher in a given city </p>

**Request body**

> ```json
> {
>     "city" : "Miami",
>     "skill" : ""
> }
> ```

**Response body**
> ```json
> {
>     "data": [
>         {
>             "ID": 1,
>             "Name": "Bertie Yates",
>             "Age": 29,
>             "Profession": "Engineer",
>             "Experience": 5,
>             "Fees": 12,
>             "City": "Tampa",
>             "Description": "I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
>             "Subject": "Yoga - beginner to intermediate",
>             "Education": "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria",
>             "IsTeachesOnline": true,
>             "IsTeachesOffline": false,
>             "Rating": 7,
>             "CanCommute": false,
>             "Bio": "Namaste, My name is Bertie Yates and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
>             "ImagePath": "img/teacher/Teacher_1.jpg"
>         },
>         {
>             "ID": 2,
>             "Name": "Hester Hogan",
>             "Age": 32,
>             "Profession": "Freelancer",
>             "Experience": 3.5,
>             "Fees": 13,
>             "City": "Orlando",
>             "Description": "I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
>             "Subject": "Yoga - beginner to intermediate",
>             "Education": "MS in physics (Aug, 2016–Jul, 2021) from University of Port Harcourt, Nigeria",
>             "IsTeachesOnline": false,
>             "IsTeachesOffline": true,
>             "Rating": 8,
>             "CanCommute": false,
>             "Bio": "Namaste, My name is Hester Hogan and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
>             "ImagePath": "img/teacher/Teacher_2.jpg"
>         }
>     ],
>     "error": null,
>     "rows_affected": 2
> }
> ```     

<h4> Case #2 - Search by skill </h4>
<p> This case searches teacher by skill </p>

**Request body**

> ```json
> {
>     "city" : "",
>     "skill" : "Chess"
> }
> ```

**Response body**

> ```json
> {
>     "data": [
>         {
>             "ID": 6,
>             "Name": "John Matthews",
>             "Age": 50,
>             "Profession": "Master",
>             "Experience": 10,
>             "Fees": 23.5,
>             "City": "Miami",
>             "Description": "I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
>             "Subject": "Yoga - beginner to intermediate",
>             "Education": "MS in physics (Aug, 2016–Jul, 2021) from University",
>             "IsTeachesOnline": false,
>             "IsTeachesOffline": true,
>             "Rating": 10,
>             "CanCommute": false,
>             "Bio": "Namaste, My name is John Matthews and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
>             "ImagePath": "img/teacher/Teacher_6.jpg"
>         },
>         {
>             "ID": 13,
>             "Name": "John Matthews",
>             "Age": 50,
>             "Profession": "Master",
>             "Experience": 10,
>             "Fees": 23.5,
>             "City": "Miami",
>             "Description": "I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
>             "Subject": "Yoga - beginner to intermediate",
>             "Education": "MS in physics (Aug, 2016–Jul, 2021) from University",
>             "IsTeachesOnline": false,
>             "IsTeachesOffline": true,
>             "Rating": 10,
>             "CanCommute": false,
>             "Bio": "Namaste, My name is John Matthews and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
>             "ImagePath": "img/teacher/Teacher_6.jpg"
>         }
>     ],
>     "error": null,
>     "rows_affected": 2
> }
> ``` 

<h4> Case #3 - Search by skill and city </h4>
<p> This case searches teacher by skill in a given city</p>

**Request body**

> ```json
> {
>     "city" : "Miami",
>     "skill" : "Chess"
> }
> ```

**Response body**

> ```json
> {
>     "data": [
>         {
>             "ID": 6,
>             "Name": "John Matthews",
>             "Age": 50,
>             "Profession": "Master",
>             "Experience": 10,
>             "Fees": 23.5,
>             "City": "Miami",
>             "Description": "I am a certified yoga trainer. YTT 200 certified from Yoga alliance international",
>             "Subject": "Yoga - beginner to intermediate",
>             "Education": "MS in physics (Aug, 2016–Jul, 2021) from University",
>             "IsTeachesOnline": false,
>             "IsTeachesOffline": true,
>             "Rating": 10,
>             "CanCommute": false,
>             "Bio": "Namaste, My name is John Matthews and I am a yoga teacher. I have studied physics from University of Port Harcourt, Nigeria but my passion for yoga led me to become a yoga teacher and I have been teaching yoga for over two years now",
>             "ImagePath": "img/teacher/Teacher_6.jpg"
>         }
>     ],
>     "error": null,
>     "rows_affected": 1
> }
> ```
 
<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- |
| data | Consists the teacher data retrieved from the database | json |
| error | Returns if any error caused while registering | error | Null, if no error is raised | 
| rows_affected | The number of teachers matching the search condition | |


<h3> Get Comments</h3>
    <p><br>
        This API is used to send the comments for a particular teacher when we display the individual teacher page.
    </p>
    
<h4>Target URL </h4>
    
    localhost:8080 +/api/getComments
   
<h4>Request Method   </h4>
    
    Get
  
<h4>Response    </h4>
    
    {"data": result}
  

<h3> Get Locations</h3>
    <p><br>
        This API is used to send the Locations of all the present teachers in the database.  
    </p>
    
<h4>Target URL </h4>
    
    localhost:8080 +/api/getLocations
   
<h4>Request Method   </h4>
    
    Get
  
<h4>Response    </h4>
    
    {"data": result}
  

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
  

<h3> Get Skills</h3>
    <p><br>
        This API is used to send the list of all Skills that are taught by the teachers. 
    </p>
    
<h4>Target URL </h4>
    
    localhost:8080 +/api/getSkills
   
<h4>Request Method   </h4>
    
    Get
  
<h4>Response    </h4>

    {"data": result}
