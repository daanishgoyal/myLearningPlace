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
            <h2 className="bg-secondary" style={{ width: "50rem" }}>
                {" "}
                Name: {teacherData.name}
            </h2>
            <div className="card" style={{ width: "50rem" }}>
                <img
                    className="image"
                    src={teacherData.image}
                    alt="Card image cap"
                />
            </div>
            <div className="bg-success p-3" style={{ width: "50rem" }}>
                <div>
                    <h4>About Me</h4>
                    <p> {teacherData.bio} </p>
                </div>
                <div>
                    <h4>Subjects</h4>
                    <p> {teacherData.subjects} </p>
                </div>
                <div>
                    <h4>Education</h4>
                    <p> {teacherData.education} </p>
                </div>

                <div>
                    <h4>Experience</h4>
                    <p> {teacherData.experience} </p>
                </div>

                <div>
                    <h4>Fees</h4>
                    <p> {teacherData.fees} </p>
                </div>

                <div>
                    <h4>Location</h4>
                    <p> {teacherData.location} </p>
                </div>

                <div>
                    <h4>Can Teach Online: </h4>
                    <p> {teacherData.online} </p>
                </div>
                <div>
                    <h4>Teaches at Student Home: </h4>
                    <p> {teacherData.studenthome} </p>
                </div>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    className="btn btn-primary"
                >
                    Message <span className="badge badge-light"></span>
                    <br />
                </button>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    className="btn btn-secondary"
                >
                    Phone <span className="badge badge-light"></span>
                </button>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    className="btn btn-dark"
                >
                    Book Appointment <span className="badge badge-light"></span>
                </button>
                <br />
                <br />
                <input
                    type="text"
                    size="80"
                    value=""
                    placeholder="Comments"
                    style={{ width: "50", height: "100" }}
                />
                <br />
                <button> Submit</button>
            </div>
        </div>
    );
};

export default TeacherSpecificDetails;
