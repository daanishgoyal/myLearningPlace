import React, { Component } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Footer from "./components/footer";
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
                    </Routes>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
