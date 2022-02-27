import React, { Component } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Teachers from "./components/teachers/Teachers.component";
import Footer from "./components/footer";
import teacherConstants from "./constants/data";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router-dom";
import TeacherSpecificDetails from "./components/teachers/TeacherSpecificDetails";
import BookAppointment from "./components/teachers/BookAppointment";
import ContactDetails from "./components/teachers/ContactDetails";
import auth from "./services/authService";
import TeachersNotFound from "./components/teachers/TeachersNotFoundComponent";

class App extends Component {
    state = {};

    componentDidMount() {
        try {
            //const user = JSON.parse(localStorage.getItem("currentUser"));
            const user = auth.getCurrentUser();
            this.setState({ user });
        } catch {}
    }

    render() {
        const { user } = this.state;

        return (
            <div className="bg-image">
                <NavBar user={user} />
                <main className="container">
                    <Routes>
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/BookAppointment"
                            element={<BookAppointment />}
                        />
                        <Route
                            path="/id/ContactDetails"
                            element={<ContactDetails />}
                        />
                        <Route
                            exact
                            path="/teacher/:id"
                            element={<TeacherSpecificDetails />}
                        />
                        <Route
                            exact
                            path="/teachers"
                            element={
                                <Teachers teacherList={teacherConstants} />
                            }
                        />
                        <Route
                            path="/teachersNotFound"
                            element={<TeachersNotFound />}
                        />
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
