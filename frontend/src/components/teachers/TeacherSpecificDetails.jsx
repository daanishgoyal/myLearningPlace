import React from "react";
import { useParams } from "react-router-dom";
import data from "../../constants/data";

const TeacherSpecificDetails = () => {
    const { id } = useParams();
    let teacherData = {};
    for (let idx in data) {
        if (data[idx].id == id) {
            teacherData = data[idx];
            break;
        }
    }

    //  const {name} = teacherData

    // console.log(teacherData)

    return (
        <div>
            <br />
            <h1 className="bg-secondary" style={{ width: "50rem" }}>
                {" "}
                Name: {teacherData.name}
            </h1>
            <div className="card" style={{ width: "50rem" }}>
                <img
                    className="image"
                    src={teacherData.image}
                    alt="Card image cap"
                />
            </div>
            <div className="bg-success p-3" style={{ width: "50rem" }}>
                <div>
                    <h1>About Me</h1>
                    <p> {teacherData.bio} </p>
                </div>
                <div>
                    <h1>Subjects</h1>
                    <p> {teacherData.subjects} </p>
                </div>
                <div>
                    <h1>Education</h1>
                    <p> {teacherData.education} </p>
                </div>
                
                <div>
                    <h1>Experience</h1>
                    <p> {teacherData.experience} </p>
                </div>

                <div>
                    <h1>Fees</h1>
                    <p> {teacherData.fees} </p>
                </div>

                <div>
                    <h1>Location</h1>
                    <p> {teacherData.location} </p>
                </div>

                <div>
                    <h5>Can Teach Online: {teacherData.online}</h5>
                    <h5>Teaches at Student Home: {teacherData.studenthome}</h5>
                    
                </div>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    class="btn btn-primary"
                >
                Message <span class="badge badge-light"></span>
                    <br />
                </button>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    class="btn btn-secondary"
                >
                    Phone <span class="badge badge-light"></span>
                </button>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    class="btn btn-dark"
                >
                    Book Appointment <span class="badge badge-light"></span>
                </button>
            <br/>
              < input type= "text"  size ="80" value ="comment"/>
              <button> Submit</button>

            </div>
        </div>
    );
};

export default TeacherSpecificDetails;
