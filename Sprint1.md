# Sprint1
In the Sprint1, we layed the foundation of our application.
1. We started with gathering the user requirements and decided the scope of the project.
2. Finalized the user stories for the application.
4. Created a [GitHub repository.](https://github.com/daanishgoyal/myLearningPlace) 
5. Created a Project in the [GitHub Project.](https://github.com/daanishgoyal/myLearningPlace/projects)
6. Created User Stories as Issues and assigned the issues among the team.
7. Recorded the demo video for the Back-End and the Front-End


## Back-End
* **PLANNING AND SETUP**
    1. MySql Database was setup and connection was made to the community server.
    2. Designed the schema, made ER-Diagrams and normalised the existing tables to reduce redundancy.
    3. Established connection between Go and MySql using GORM.
    4. Made structs in Go for the normalised tables and fed dummy data into the database.
    5. Use Express inspired Web Framework to test the API Endpoints.

* **AGENDAS ACCOMPLISHED**
We developed three different API services for our platform.
    1. User Registration
    2. User Login
    3. Search teacher by location.
    
* **Details about the developed API's:**
    1. User Registration API - The user creates an account on our platform. The user enters their personal details such as first name, email-address and password. The email is validated and accepted if it is unique. We use [bcrypt](golang.org/x/crypto/bcrypt) package to encrypt the user's password. This API accepts a POST HTTP request.
    2. User Login - The registered user can login into our platform by providing the email-address and password. The login credentials are validated and based upon different use cases, the user is either logged in successfully, asked to register or prompted to re-enter the correct password. This API accepts a POST HTTP request.
    3. Search teacher by location - The user enters the location where he wishes to learn a skill. A list of teachers in the searched location will be displayed along with their details, such as Experience, payrate, Education History along with a short bio. This API accepts a POST HTTP request.


## FrontEnd
* **PLANNING AND SETUP**
1. ReactJS was setup with the latest version of nodejs(16.13.2).
2. Designed the homepage with the search component along with a some trivia about the product.
3. Designed a navbar for the site which contains links to homepage, login/logout and booking history.
4. Designed and developed the routing paths to each page in the code structure.
5. Designed a logo for the platform.
6. Designed the footer for the website which contains links to various resoures, help and feedback links and policy links.
7. Designed and established login and logout feature with a mockup-up backend.
8. Designed the list of teachers page which contains all the top teachers for that particular skill and preferred location.
9. Designed the page for viewing details for a specific tutor, 

* **AGENDAS ACCOMPLISHED**
We developed four different components for our platform.

1. Users can login and register an account in our platform.
2. Users can search teacher or tutors by skills and location.
3. Users can view the list of teachers based on search criteria and location.
4. Users can view specific details of each teacher which includes details such as fees, online/physical, location, etc.

* **Details about the developed features:**
    1. User Login/Register - Each user can register and login in our platform to book appointments with a tutor of his choice.
    2. Search Teachers - Every user has access to the search component, where a search can be made given the constraints (skill and location) are entered to their respective fields. On clicking 'Search', the user is directed to another page with the list of top teachers for that particular skill and preferred location.
    3. Footer component - Every user can now access links to help and feedback, membership details, policy details and other resources and guides in the footer component located at the bottom of every page in the site.
    4. Navbar component - Every user can register, login, and navigate to the homepage by using the navbar component located at the top of every page in the site.
    5. Teachers List component - Once a user searches based on skill and location, the list of teachers based on that skill and location are displayed. The teachers list includes brief details about each teacher. Each teachers’ details include Fees they charge, location , teaching mode either online or offline and brief description about them.
    6. Details of a specific teacher - Users can see more information about each teacher by clicking on 'More Info' button located at the end of a teachers card. This page displays additionals details such as fees per hour, mode of teaching (online/teaching), experience, bio, subjects, education etc. Users can also choose to book an appointment if they wish, message, phone or write up a few comments if they wish.


