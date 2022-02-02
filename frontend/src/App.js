import React, { Component } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Teachers from "./components/teachers/Teachers.component";
import Footer from "./components/footer";
import data from "./constants/data"
import { Route, Routes } from "react-router-dom";
import TeacherSpecificDetails from "./components/teachers/TeacherSpecificDetails";




class App extends Component {
    state = {};

    render() {
        return (
            <div className="bg-image">
                <NavBar />
                <main className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route exact path='/teacher/:id' element={<TeacherSpecificDetails/>} />
                        <Route exact path="/teachers" element={<Teachers datatolist={data} />} />
                        
                        
                    </Routes>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
