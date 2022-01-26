import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import HomePage from "./components/homepage";

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <NavBar />
                <main className="container">
                    <HomePage />
                </main>
            </div>
        );
    }
}

export default App;
