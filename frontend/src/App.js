import React, { Component } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Teachers from "./components/teachers/Teachers.component";
import Footer from "./components/footer";
import data from "./constants/data";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router-dom";
import TeacherSpecificDetails from "./components/teachers/TeacherSpecificDetails";

class App extends Component {
    state = {};

    componentDidMount() {
        try {
            const user = JSON.parse(localStorage.getItem("currentUser"));
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
                            exact
                            path="/teacher/:id"
                            element={<TeacherSpecificDetails />}
                        />
                        <Route
                            exact
                            path="/teachers"
                            element={<Teachers datatolist={data} />}
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
