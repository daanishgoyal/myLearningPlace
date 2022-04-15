import React, { Component } from "react";
import auth from "../../services/authService";
import { getBookingHistory } from "../../services/bookingHistoryService";
import "../teachers/TeacherSpecificDetails.css";
import "../teachers/BookingStatus.css";

class BookStatus extends Component {
    state = {
        appointment: null,
        currentUser: {},
    };

    async componentDidMount() {
        try {
            const currentUser = auth.getCurrentUser();
            this.setState({ currentUser });
            const { data: appointments } = await getBookingHistory(
                currentUser.ID
            );
            const { teacherName } = this.props;
            let list = appointments.filter(myFunction);

            function myFunction(value) {
                return value.TeacherName === teacherName;
            }
            if (list.length > 0) {
                let length = list.length - 1;
                const appointment = list[length];
                this.setState({ appointment });
            } else {
                this.setState({ appointment: null });
            }
        } catch {}
    }

    render() {
        const { appointment } = this.state;
        //const date = new Date(appointment.SlotDate);
        return (
            <div className="   container-fluid card bg-dark">
                <div className="row mt-2" />
                <div className="row " />
                <div className="row  booked font-weight-bold ">
                    <br />
                    <div className="button bg-success appointment">
                        Last Booked Appointment Details:{" "}
                    </div>
                </div>
                {appointment && (
                    <div className="row ">
                        <div className="row ">
                            {/* <h5 className="bg-success text-dark">
                                {appointment.SlotDay},{" "}font-weight-bold
                                {date.toDateString().substring(4)}
                            </h5> */}
                            <div className="row mt-2 ms-5">
                                <div className="col-sm-2 font-weight-bold">
                                    <div className="col">
                                        <label>Date:</label>
                                    </div>
                                </div>
                                <div className="col-sm-9 font-weight-bold">
                                    <div className="col">
                                        <label>
                                            {" "}
                                            {appointment.SlotDay},{" "}
                                            {appointment.SlotDate}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-2 ms-5">
                                <div className="col-sm-2 font-weight-bold">
                                    <label>Skill:</label>
                                </div>
                                <div className="col-sm-5 font-weight-bold">
                                    <div className="col ">
                                        <label> {appointment.SkillName}</label>
                                    </div>
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-2 ms-5">
                                <div className="col-sm-2 font-weight-bold">
                                    <label>Slot: </label>
                                </div>
                                <div className="col-sm-8 font-weight-bold">
                                    <div className="col ms-3">
                                        <label>
                                            {appointment.SlotStartTime +
                                                "-" +
                                                appointment.SlotEndTime}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-8" />
                            </div>
                        </div>
                        <br />
                    </div>
                )}

                <div>
                    {auth.getCurrentUser() === null && (
                        <div>
                            <h4 className="mt-3 text-center text-light font-weight-bold">
                                Please login to see details
                            </h4>
                        </div>
                    )}
                </div>

                {!appointment && auth.getCurrentUser() !== null && (
                    <h4 className="mt-3 text-center text-light font-weight-bold">
                        No Bookings made so far!
                    </h4>
                )}
                <br />
            </div>
        );
    }
}
export default BookStatus;
