import React, { Component } from "react";
import auth from "../services/authService";

class BookingHistory extends Component {
    state = {
        appointments: {},
        currentUser: {},
    };

    componentDidMount() {
        try {
            const currentUser = auth.getCurrentUser();
            this.setState({ currentUser });
        } catch {}
    }

    render() {
        return (
            <div className="container-fluid min-vh-100">
                <div className="row mt-5" />
                <div className="row">
                    <div className="col-sm-8 bg-success text-white">
                        <h1>Welcome {}</h1>
                    </div>
                    <div className="col-sm-8" />
                </div>
                <div className="row" />
            </div>
        );
    }
}

export default BookingHistory;
