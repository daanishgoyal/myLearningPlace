import React, { Component } from "react";
import auth from "../services/authService";
import { getBookingHistory } from "../services/bookingHistoryService";

class BookingHistory extends Component {
    state = {
        appointments: [],
        currentUser: {},
    };

    async componentDidMount() {
        try {
            const currentUser = auth.getCurrentUser();
            this.setState({ currentUser });
            const { data: appointments } = await getBookingHistory(
                currentUser.ID
            );
            this.setState({ appointments });
        } catch {}
    }

    render() {
        const { currentUser, appointments } = this.state;
        return (
            <div className="container-fluid min-vh-100">
                <div className="row mt-5" />
                <div className="row">
                    <div className="col-sm-16 bg-secondary text-dark">
                        <h1>Welcome {currentUser.FirstName},</h1>
                    </div>
                </div>
                <div className="row col-sm-16 mt-4 ms-5 bg-success">
                    <h2>Profile Information</h2>
                </div>
                <div className="row col-sm-16 ms-5 bg-dark text-light">
                    <div className="row mt-2">
                        <div className="col-sm-2 h4">
                            <label>Name:</label>
                        </div>
                        <div className="col-sm-8 h4">
                            <label>
                                {" "}
                                {currentUser.FirstName +
                                    " " +
                                    currentUser.LastName}
                            </label>
                        </div>
                        <div className="col-sm-8" />
                    </div>
                    <div className="row mt-1" />
                    <div className="row">
                        <div className="col-sm-2 h4">
                            <label>Email Address: </label>
                        </div>
                        <div className="col-sm-8 h4">
                            <label>{currentUser.Email}</label>
                        </div>
                        <div className="col-sm-8" />
                    </div>
                    <div className="row mt-3" />
                </div>
                <div className="row mt-3" />
                <div className="row col-sm-16 mt-4 ms-5 bg-success">
                    <h2>Booking History</h2>
                </div>
                {appointments && (
                    <div className="row col-sm-16 ms-5 bg-dark text-light">
                        {appointments.map((appointment, index) => {
                            const date = new Date(appointment.SlotDate);
                            return (
                                <div
                                    key={index}
                                    className="row col-sm-11 mt-4 ms-4"
                                >
                                    <h3 className="bg-success text-white">
                                        {appointment.SlotDay},{" "}
                                        {
                                            /* {date.getDate() +
                                            " " +
                                            date.getUTCMonth() +
                                            " " +
                                            date.getFullYear()} */
                                            date.toDateString().substring(4)
                                        }
                                    </h3>
                                    <div className="row mt-2 ms-5 ">
                                        <div className="col-sm-1 h4">
                                            <label>Teacher:</label>
                                        </div>
                                        <div className="col-sm-10 h4">
                                            <label>
                                                {appointment.TeacherName}
                                            </label>
                                        </div>
                                        <div className="col-sm-8" />
                                    </div>
                                    <div className="row mt-2 ms-5">
                                        <div className="col-sm-1 h4">
                                            <label>Skill:</label>
                                        </div>
                                        <div className="col-sm-10 h4">
                                            <label>
                                                {appointment.SkillName}
                                            </label>
                                        </div>
                                        <div className="col-sm-8" />
                                    </div>
                                    <div className="row mt-2 ms-5">
                                        <div className="col-sm-1 h4">
                                            <label>Slot:</label>
                                        </div>
                                        <div className="col-sm-10 h4">
                                            <label>
                                                {appointment.SlotStartTime +
                                                    "-" +
                                                    appointment.SlotEndTime}
                                            </label>
                                        </div>
                                        <div className="col-sm-8" />
                                    </div>
                                </div>
                            );
                        })}
                        <br />
                    </div>
                )}

                {!appointments && (
                    <h2 className="ms-5 mt-5 bg-dark text-center text-light">
                        No Bookings made so far!
                    </h2>
                )}
                <br />
            </div>
        );
    }
}

export default BookingHistory;
