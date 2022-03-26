import React, { Component } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import teacherConstants from "../../constants/data";
import "../teachers/TeacherSpecificDetails.css";
import "../teachers/ContactAppointment.css";
import "../teachers/BookAppointment.jsx";
import auth from "../../services/authService";
import CommentsComponent from "./CommentsComponent";
import ContactDetails from "./ContactDetails";

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
  // state = {
  //     teacherData: [],
  // };

  // componentDidMount() {
  //     const teacherId = this.props.match.params.id;
  //     const teacherData = teacherConstants.find(
  //         (t) => t.id === Number(teacherId)
  //     );
  //     this.setState({ teacherData });
  // }

  state = {
    // appointments: {},
    currentUser: {},
  };

  componentDidMount() {
    try {
      const currentUser = auth.getCurrentUser();
      this.setState({ currentUser });
    } catch {}
  }

  getTeacherDetails = (teacherData, name, currentUser) => (
    <>
      <div className="card-group bg-success">
        <div className="card bg-success">
          {/* <br /> */}
          {/* <br/>  */}
          <h2 className="bg-secondary" style={{ width: "30rem" }}>
            {" "}
            Name: {teacherData.Name}
          </h2>
          {/* <div className="card" style={{ width: "30rem" }}>
                        <img className="image" style={{ width: "30rem" ,maxHeight:"20rem"}} src={require(`../../${teacherData.ImagePath}`)} alt="" />
                    </div> */}
          <div className="bg-success p-3 " style={{ width: "30rem" }}>
            <div className="bg-success">
              <h4>About Me </h4>
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
              <p> {teacherData.IsTeachesOnline ? "Yes" : "No"} </p>
            </div>
            <div>
              <h4>Can Teach Offline: </h4>
              <p> {teacherData.IsTeachesOffline ? "Yes" : "No"} </p>
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

        <div className="card image-card bg-success">
          <div className="card" style={{ width: "30rem" }}>
            <img
              className="image"
              style={{ width: "30rem", maxHeight: "20rem" }}
              src={require(`../../${teacherData.ImagePath}`)}
              alt=""
            />
          </div>
          <div>
            <h5>Rating: {teacherData.Rating}</h5>
          </div>
          <div className="card-specific bg-success">
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
            <Link className="button" to="/login">
              Book Appointment
            </Link>
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
    let name = "";
    try {
      const { currentUser } = this.state;
      name = currentUser.FirstName + " " + currentUser.LastName;
    } catch {}
    return <>{teacherData && this.getTeacherDetails(teacherData, name)}</>;
  }
}

export default withRouter(TeacherSpecificDetails);
