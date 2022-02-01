import React, { Component } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Teachers from "./components/teachers/Teachers.component";
import TeacherSpecificDetails from "./components/teachers/Teachers.component";
import Footer from "./components/footer";
import data from "./constants/data"
import { Route, Routes } from "react-router-dom";

class App extends Component {
    state = {};

    render() {
        return (
            <div className="bg-image">
                <NavBar />
                <main className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/teachers" element={<Teachers datatolist={data} />} />
                        <Route path="/teacher" element={<TeacherSpecificDetails/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
