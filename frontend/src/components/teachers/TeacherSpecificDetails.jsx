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
<<<<<<< Updated upstream
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
                    <h1>Description</h1>
                    <p> {teacherData.description} </p>
                </div>
                <br />
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
                    class="btn btn-success"
                >
                    Phone <span class="badge badge-light"></span>
                </button>

                <button
                    type="button"
                    style={{ margin: "10px" }}
                    class="btn btn-info"
                >
                    Book Appointment <span class="badge badge-light"></span>
                </button>
            </div>
=======
          <h1> Name: {teacherData.name}</h1>
           <div  className="card" style={{ width: "50rem"}}>
            <img className="image" src={teacherData.image} alt="Card image cap" />
           </div>

          <div>
            <h1>Description</h1>
           <p> {teacherData.description} </p>
           </div>
        <br/>
        <br/>
           

           
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


           <button type="button" style={{margin:'10px'}} class="btn btn-primary">
    Message <span class="badge badge-light"></span>
     <br/>
       </button>   

       


       <button type="button" style={{margin:'10px'}} class="btn btn-success">
    Phone <span class="badge badge-light"></span>
     
       </button>

       <button type="button" style={{margin:'10px'}} class="btn btn-info">
    Book Appointment <span class="badge badge-light"></span>
     
       </button>

    


        
        
        
>>>>>>> Stashed changes
        </div>
    );
};

export default TeacherSpecificDetails;
