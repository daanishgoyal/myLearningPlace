import React from "react";
import { useParams } from "react-router-dom";
import data from "../../constants/data";

const TeacherSpecificDetails= ()=> {

    const {id} = useParams();
    let teacherData = {};
    for(let idx in data) {
        if(data[idx].id == id) {
            teacherData = data[idx];
            break;
        }
    }

    //  const {name} = teacherData

    // console.log(teacherData)
    
    return (
        <div>
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




        
        
        
        </div>

    
              
        

    )
}

export default TeacherSpecificDetails;