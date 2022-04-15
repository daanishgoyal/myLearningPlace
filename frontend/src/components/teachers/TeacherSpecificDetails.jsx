import React, { Component } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "../teachers/TeacherSpecificDetails.css";
import "../teachers/ContactAppointment.css";
import auth from "../../services/authService";
import CommentsComponent from "./CommentsComponent";
import ContactDetails from "./ContactDetails";
import {
    Button,
    Modal,
    Dropdown,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { getTeacherSchedule } from "../../services/getTeacherScheduleService";
import { getSkillId } from "../../services/getSkillIDService";
import { createBooking } from "../../services/createBookingService";
import { Rating } from "react-simple-star-rating";
import BookStatus from "./BookingStatus";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        const location = useLocation();
        return (
            <Children
                {...props}
                match={match}
                teacherData={location.state.teacherData}
            />
        );
    };
}

class TeacherSpecificDetails extends Component {
    state = {
        teacherData: [],
        currentUser: {},
        show: false,
        teacherSchedule: [],
        slotsAvailable: new Map([]),
        selectedDay: "",
        selectedSlot: "",
        slotsForSpecificDay: [],
        skill: {},
        noteTeacher: "",
    };

    async componentDidMount() {
        try {
            const { teacherData } = this.props;
            this.setState({ teacherData });

            const currentUser = auth.getCurrentUser();
            this.setState({ currentUser });

            const { data: teacherSchedule } = await getTeacherSchedule(
                teacherData.ID
            );
            this.setState({ teacherSchedule });

            let map = new Map([]);
            teacherSchedule.forEach(myFunction);

            function myFunction(value, index, array) {
                const key = value.Day + " " + value.Date;
                if (!map.has(key)) map.set(key, []);

                let slots = map.get(key);
                slots.push(value.StartTime + "-" + value.EndTime);
            }
            const slotsAvailable = map;
            this.setState({ slotsAvailable });

            const firstEntry = [...slotsAvailable.entries()][0];
            const selectedDay = firstEntry[0];
            const selectedSlot = firstEntry[1][0];
            const slotsForSpecificDay = firstEntry[1];
            this.setState({ slotsForSpecificDay, selectedDay, selectedSlot });

            const current = JSON.parse(localStorage.getItem("currentSearch"));
            const { skill: skillName } = current;

            const { data: skillData } = await getSkillId(skillName);
            this.setState({ skill: skillData });
        } catch {}
    }

    onShowHideModal() {
        this.setState({ show: !this.state.show });
    }

    showAlert(message) {
        alert(message);
    }

    onClickConfirmBooking = async () => {
        try {
            const {
                teacherData,
                currentUser,
                skill,
                selectedDay,
                selectedSlot,
                noteTeacher,
            } = this.state;
            const { data: bookingConfirmation } = await createBooking(
                teacherData.ID,
                currentUser.ID,
                skill.ID,
                this.getSlotID(selectedDay, selectedSlot),
                noteTeacher
            );
            let message = "";
            if (bookingConfirmation && bookingConfirmation.BookingId) {
                message =
                    "Your booking has been confirmed. Thank you for using our platform.";
            } else {
                message = "Sorry, booking failed. Please try again.";
            }
            this.onShowHideModal();
            this.showAlert(message);
            window.location.reload();
        } catch {}
    };

    handleDayChange = (changeEvent) => {
        const day = changeEvent.target.value;
        const slotsForSpecificDay = this.state.slotsAvailable.get(day);
        const selectedSlot = slotsForSpecificDay[0];
        this.setState({
            selectedDay: day,
            slotsForSpecificDay,
            selectedSlot,
        });
    };

    handleSlotChange = (changeEvent) => {
        this.setState({
            selectedSlot: changeEvent.target.value,
        });
    };

    getSlotID = (selectedDay, selectedSlot) => {
        const teacherSchedule = [...this.state.teacherSchedule];
        const split = selectedSlot.split("-");
        const sTime = split[0];
        const eTime = split[1];
        let first = teacherSchedule.find(myFunction);

        function myFunction(value) {
            return (
                value.Day + " " + value.Date === selectedDay &&
                value.StartTime === sTime &&
                value.EndTime === eTime
            );
        }
        return first.SlotID;
    };

    getTeacherDetails = (teacherData, slotsAvailable, slotsForSpecificDay) => (
        <>
            <div className="card-group bg-success bg-dark text-light mt-4">
                <div className="card-first bg-success bg-dark text-light mt-2">
                    <h2
                        className="bg-secondary ms-2"
                        style={{ width: "30rem" }}
                    >
                        {" "}
                        {teacherData.Name}
                    </h2>
                    <h5 className="ms-2">
                        {" "}
                        <Rating
                            readonly={true}
                            allowHover={false}
                            initialValue={0}
                            ratingValue={teacherData.Rating * 10}
                            allowHalfIcon={false}
                            iconsCount={5}
                            size={25}
                        />
                    </h5>
                    <div
                        className="bg-success p-3 bg-dark text-light"
                        style={{ width: "30rem" }}
                    >
                        <div className="bg-success">
                            <h4>About Me</h4>
                        </div>
                        <div>
                            <p align="justify"> {teacherData.Bio} </p>
                        </div>
                        <div className=" bg-success">
                            <h4>Subjects</h4>
                        </div>
                        <div>
                            <p> {teacherData.Subject} </p>
                        </div>
                        <div className=" bg-success">
                            <h4>Education</h4>
                        </div>
                        <div>
                            <p> {teacherData.Education} </p>
                        </div>

                        <div className=" bg-success">
                            <h4>Experience</h4>
                        </div>
                        <div>
                            <p> {teacherData.Experience} Years </p>
                        </div>

                        <div className=" bg-success">
                            <h4>Fees</h4>
                        </div>
                        <div>
                            <p> ${teacherData.Fees} per hour </p>
                        </div>

                        <div className=" bg-success">
                            <h4>Location</h4>
                        </div>
                        <div>
                            <p> {teacherData.City} </p>
                        </div>

                        <div className=" bg-success">
                            <h4>Can Teach Online: </h4>
                        </div>
                        <div>
                            <p>
                                {" "}
                                {teacherData.IsTeachesOnline
                                    ? "Yes"
                                    : "No"}{" "}
                            </p>
                        </div>
                        <div className=" bg-success">
                            <h4>Can Teach Offline: </h4>
                        </div>
                        <div>
                            <p>
                                {" "}
                                {teacherData.IsTeachesOffline
                                    ? "Yes"
                                    : "No"}{" "}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-second bg-dark mt-2">
                    <div
                        className="card image-card bg-dark text-light"
                        style={{ width: "30rem" }}
                    >
                        <img
                            className="image"
                            style={{ width: "30rem", maxHeight: "19rem" }}
                            src={require(`../../${teacherData.ImagePath}`)}
                            alt=""
                        />
                    </div>
                    <div className="card-specific bg-dark">
                        {auth.getCurrentUser() === null && (
                            <Link
                                className="button bg-primary appointment"
                                to="/login"
                                state={{
                                    from: `/teacher/${teacherData.ID}`,
                                    teacherData: teacherData,
                                }}
                            >
                                Contact Details
                            </Link>
                        )}

                        <div>
                            {auth.getCurrentUser() !== null && (
                                <div>
                                    <Button
                                        className="button bg-primary appointment"
                                        aria-readonly={true}
                                    >
                                        Contact Details
                                    </Button>
                                    <ContactDetails
                                        teacherId={teacherData.ID}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="mt-4 modalClass">
                            {auth.getCurrentUser() === null && (
                                <Link
                                    className="button bg-primary appointment"
                                    to="/login"
                                    state={{
                                        from: `/teacher/${teacherData.ID}`,
                                        teacherData: teacherData,
                                    }}
                                >
                                    Book Appointment
                                </Link>
                            )}
                            {auth.getCurrentUser() !== null && (
                                <div>
                                    <Button
                                        className="button bg-primary appointment"
                                        onClick={() => this.onShowHideModal()}
                                    >
                                        Book Appointment
                                    </Button>
                                </div>
                            )}
                            <Modal
                                show={this.state.show}
                                onHide={() => this.onShowHideModal()}
                            >
                                <Modal.Header closeButton>
                                    Book Appointment
                                </Modal.Header>
                                <Modal.Body>
                                    {this.state.teacherSchedule !== null && (
                                        <Dropdown>
                                            Select Day
                                            {[...slotsAvailable.keys()].map(
                                                (day, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="radio ms-4">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value={
                                                                            day
                                                                        }
                                                                        checked={
                                                                            this
                                                                                .state
                                                                                .selectedDay ===
                                                                            day
                                                                        }
                                                                        onChange={
                                                                            this
                                                                                .handleDayChange
                                                                        }
                                                                    />

                                                                    {" " + day}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </Dropdown>
                                    )}
                                    {this.state.teacherSchedule !== null && (
                                        <Dropdown>
                                            Select Slot
                                            {slotsForSpecificDay.map(
                                                (slot, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="radio ms-4">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value={
                                                                            slot
                                                                        }
                                                                        checked={
                                                                            this
                                                                                .state
                                                                                .selectedSlot ===
                                                                            slot
                                                                        }
                                                                        onChange={
                                                                            this
                                                                                .handleSlotChange
                                                                        }
                                                                    />

                                                                    {" " + slot}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </Dropdown>
                                    )}
                                    {this.state.teacherSchedule === null && (
                                        <div>
                                            <h5>
                                                Sorry, no slots available. This
                                                teacher is booked for the week!
                                            </h5>
                                        </div>
                                    )}
                                </Modal.Body>
                                <Modal.Footer>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Send a note"
                                            value={this.state.noteTeacher}
                                            onChange={(e) => {
                                                this.setState({
                                                    noteTeacher: e.target.value,
                                                });
                                            }}
                                        />
                                        <Button
                                            disabled={
                                                this.state.teacherSchedule ===
                                                null
                                            }
                                            onClick={() =>
                                                this.onClickConfirmBooking()
                                            }
                                        >
                                            Confirm Booking
                                        </Button>
                                    </InputGroup>
                                </Modal.Footer>
                            </Modal>

                            <div className="mt-3 text-center appointment">
                                <BookStatus teacherName={teacherData.Name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-col-sm-6 mt-4">
                <CommentsComponent teacherId={teacherData.ID} />
            </div>
            <div className="row-col-sm-3 mt-4" />
        </>
    );

    render() {
        const { teacherData } = this.props;
        const { slotsAvailable, slotsForSpecificDay } = this.state;
        return (
            <>
                {teacherData &&
                    this.getTeacherDetails(
                        teacherData,
                        slotsAvailable,
                        slotsForSpecificDay
                    )}
            </>
        );
    }
}

export default withRouter(TeacherSpecificDetails);
