import React, { Component } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import teacherConstants from "../../constants/data";
import "../teachers/TeacherSpecificDetails.css";
import "../teachers/ContactAppointment.css";
import "../teachers/BookAppointment.jsx";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        const location = useLocation();
        return <Children {...props} match={match} teacherData={location.state.teacherData}/>;
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
    
    
    
    getTeacherDetails = (teacherData) => (
        
   <>
     
            <div className="card-group">
                <div className="card">
                     {/* <br /> */}
                    {/* <br/>  */}
                    <h2 className="bg-secondary" style={{ width: "30rem"  }}>
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
                            <p> {(teacherData.IsTeachesOnline)? "Yes": "No"} </p>
                        </div>
                        <div>
                        <h4>Can Teach Offline: </h4>
                            <p> {(teacherData.IsTeachesOffline)? "Yes": "No"} </p>
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

<div class="comment-section">
    <h4> Comments</h4>
           <div class="comment">
             This is first comment.
           </div>
           <div class="comment">
             This is second comment.
            </div>
            <div class="comment">
              This is third comment.
            </div>
            <div class="comment">
              This is fourth comment.
            </div>
            <div class="comment">
              This is fifth comment.
            </div>
            <div class="comment">
              This is sixth comment.
            </div>
        </div>

                    </div>
                </div>

                <div className="card">

                   <div className="card" style={{ width: "30rem" }}>
                        <img className="image" style={{ width: "30rem" ,maxHeight:"20rem"}} src={require(`../../${teacherData.ImagePath}`)} alt="" />
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
            </div>
        </>
    );

    render() {
        const { teacherData } = this.props;
        return <>{teacherData && this.getTeacherDetails(teacherData)}</>;
    }
}

export default withRouter(TeacherSpecificDetails);
