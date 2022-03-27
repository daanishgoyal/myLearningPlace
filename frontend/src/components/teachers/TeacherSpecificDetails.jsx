import React, { Component } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "../teachers/TeacherSpecificDetails.css";
import "../teachers/ContactAppointment.css";
import "../teachers/BookAppointment.jsx";
import auth from "../../services/authService";
import CommentsComponent from "./CommentsComponent";
import ContactDetails from "./ContactDetails";
import { Button, Modal, Dropdown } from "react-bootstrap";
import { getTeacherSchedule } from "../../services/getTeacherScheduleService";
import { getSkillId } from "../../services/getSkillIDService";
import { createBooking } from "../../services/createBookingService";

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
    };

    async componentDidMount() {
        try {
            const teacherId = this.props.match.params.id;
            const { teacherData: teacherData } = this.props;
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

    onBookAppointmentSelect = () => {
        try {
            console.log("reached onBookAppointmentSelect()");
            const {
                teacherData,
                currentUser,
                skill,
                selectedDay,
                selectedSlot,
            } = this.state;
            const { data: bookingConfirmation } = createBooking(
                teacherData.ID,
                currentUser.ID,
                skill.ID,
                this.getSlotID(selectedDay, selectedSlot)
            );
            this.onShowHideModal();
        } catch {}
    };

    handleDayChange = (changeEvent) => {
        const day = changeEvent.target.value;
        console.log(day);
        const slotsForSpecificDay = this.state.slotsAvailable.get(day);
        const selectedSlot = slotsForSpecificDay[0];
        this.setState({
            selectedDay: day,
            slotsForSpecificDay,
            selectedSlot,
        });
    };

    handleSlotChange = (changeEvent) => {
        console.log(changeEvent.target.value);
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

    getTeacherDetails = (
        teacherData,
        name,
        currentUser,
        teacherSchedule,
        slotsAvailable,
        slotsForSpecificDay
    ) => (
        <>
            <div className="card-group">
                <div className="card">
                    {/* <br /> */}
                    {/* <br/>  */}
                    <h2 className="bg-secondary" style={{ width: "30rem" }}>
                        {" "}
                        Name: {teacherData.Name}
                    </h2>
                    {/* <div className="card" style={{ width: "30rem" }}>
                        <img className="image" style={{ width: "30rem" ,maxHeight:"20rem"}} src={require(`../../${teacherData.ImagePath}`)} alt="" />
                    </div> */}
                    <div className="bg-success p-3" style={{ width: "30rem" }}>
                        <div>
                            <h4>About Me</h4>
                            <p> {teacherData.Bio} </p>
                        </div>
                        <div>
                            <h4>Subjects</h4>
                            <p> {teacherData.Subject} </p>
                        </div>
                        <div>
                            <h4>Education</h4>
                            <p> {teacherData.Education} </p>
                        </div>

                        <div>
                            <h4>Experience</h4>
                            <p> {teacherData.Experience} </p>
                        </div>

                        <div>
                            <h4>Fees</h4>
                            <p> {teacherData.Fees} $ per hour </p>
                        </div>

                        <div>
                            <h4>Location</h4>
                            <p> {teacherData.City} </p>
                        </div>

                        <div>
                            <h4>Can Teach Online: </h4>
                            <p>
                                {" "}
                                {teacherData.IsTeachesOnline
                                    ? "Yes"
                                    : "No"}{" "}
                            </p>
                        </div>
                        <div>
                            <h4>Can Teach Offline: </h4>
                            <p>
                                {" "}
                                {teacherData.IsTeachesOffline
                                    ? "Yes"
                                    : "No"}{" "}
                            </p>
                        </div>

                        {/* <div>
                            <h4>Teaches at Student Home: </h4>
                            <p> {teacherData.studenthome} </p>
                        </div> */}
                        {/* <input
                            type="text"
                            size="50"
                            placeholder="Comments"
                            style={{ width: "8", height: "20" }}
                        /> 
                         <br />
                        <button> Submit</button> */}

                        {/* <textarea class="scrollabletextbox" name="note">
                 Comments 
                 </textarea> */}
                    </div>
                </div>

                <div className="card image-card">
                    <div className="card" style={{ width: "30rem" }}>
                        <img
                            className="image"
                            style={{ width: "30rem", maxHeight: "20rem" }}
                            src={require(`../../${teacherData.ImagePath}`)}
                            alt=""
                        />
                    </div>

                    <div className="card-specific">
                        <Link className="button" to="/login">
                            ContactDetails
                        </Link>
                        {/* <button
                type="button"
                className="btn btn-primary"
            >
                Contact Details
            </button> */}
                        <div>
                            {JSON.stringify(currentUser) !== "{}" && (
                                <ContactDetails teacherId={teacherData.ID} />
                            )}
                        </div>
                        {/* <Link className="button" to="/login">
              Book Appointment
            </Link> */}
                        <div className="modalClass">
                            <Button onClick={() => this.onShowHideModal()}>
                                Book Appointment
                            </Button>
                            <Modal
                                show={this.state.show}
                                onHide={() => this.onShowHideModal()}
                            >
                                <Modal.Header closeButton>
                                    Book Appointment
                                </Modal.Header>
                                <Modal.Body>
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
                                                                    value={day}
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
                                                                    value={slot}
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
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        onClick={() =>
                                            this.onBookAppointmentSelect()
                                        }
                                    >
                                        Confirm Booking
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    {/* <button
                type="button"
                className="btn btn-dark"
            >
                Book Appointment
            </button> */}
                    <br />
                    <br />
                </div>
                <CommentsComponent teacherId={teacherData.ID} />
            </div>
        </>
    );

    render() {
        const { teacherData } = this.props;
        const { teacherSchedule, slotsAvailable, slotsForSpecificDay } =
            this.state;
        let name = "";
        const { currentUser } = this.state;
        name = currentUser.FirstName + " " + currentUser.LastName;

        return (
            <>
                {teacherData &&
                    this.getTeacherDetails(
                        teacherData,
                        name,
                        currentUser,
                        teacherSchedule,
                        slotsAvailable,
                        slotsForSpecificDay
                    )}
            </>
        );
    }
}

export default withRouter(TeacherSpecificDetails);
