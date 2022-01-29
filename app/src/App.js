import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Footer from "./components/footer";

class App extends Component {
    state = {};

    render() {
        return (
            <div className="bg-image">
                <NavBar />
                <main className="container">
                    <HomePage />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
