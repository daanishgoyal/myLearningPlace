import React, { Component } from "react";
import auth from "../../services/authService";
import { getBookingHistory } from "../../services/bookingHistoryService";

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
            <div className="container-fluid">
                <div className="row mt-5" />
                <div className="row col-sm-8" />
                <div className="row col-sm-8 mt-4 ms-5 bg-success">
                    <h4 className="text-center">Last Booked Appointment:</h4>
                </div>
                {appointment && (
                    <div className="row col-sm-16 ms-5 text-dark">
                        <div className="row col-sm-11 mt-2 ms-4">
                            {/* <h5 className="bg-success text-dark">
                                {appointment.SlotDay},{" "}
                                {date.toDateString().substring(4)}
                            </h5> */}
                            <div className="row mt-2 ms-5">
                                <div className="col-sm-2 h6">
                                    <label>Date:</label>
                                </div>
                                <div className="col-sm-10 h6">
                                    <label>
                                        {appointment.SlotDay},{" "}
                                        {appointment.SlotDate}
                                    </label>
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-2 ms-5">
                                <div className="col-sm-2 h6">
                                    <label>Skill:</label>
                                </div>
                                <div className="col-sm-10 h6">
                                    <label>{appointment.SkillName}</label>
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-2 ms-5">
                                <div className="col-sm-2 h6">
                                    <label>Slot:</label>
                                </div>
                                <div className="col-sm-10 h6">
                                    <label>
                                        {appointment.SlotStartTime +
                                            "-" +
                                            appointment.SlotEndTime}
                                    </label>
                                </div>
                                <div className="col-sm-8" />
                            </div>
                        </div>
                        <br />
                    </div>
                )}

                {!appointment && (
                    <h4 className="ms-5 mt-5 text-center text-dark">
                        No Bookings made so far!
                    </h4>
                )}
                <br />
            </div>
        );
    }
}
export default BookStatus;
