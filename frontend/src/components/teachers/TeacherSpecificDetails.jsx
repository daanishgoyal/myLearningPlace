import React from "react";
import { useParams } from "react-router-dom";
import data from "../../constants/data";

export function TeacherSpecificDetails() {

    const {id} = useParams();
    let teacherData = {};
    for(let idx in data) {
        if(data[idx].id == id) {
            teacherData = data[idx];
            break;
        }
    }

    // const {name} = teacherData

    console.log(teacherData)
    
    return (
        <h1>welcome {teacherData.name}</h1>
    )
}