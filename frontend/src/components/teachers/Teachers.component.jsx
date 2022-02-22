
import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

const Teachers = ({ dataToList }) => {
    //const [data, setData] = useState(datatolist);
    // axios.post("http://localhost:8080/api/search",{"city": "Tampa","skill":"Yoga"})
    //      .then(res => {
    //         setData(res.data.data);
    //         console.log(res)
    //      });
console.log('list', dataToList)
    return (
        
        <div>
            {   
               dataToList && dataToList.map((x) => {
                    const {
                        ID,
                        Name,
                        Age,
                        Profession,
                        Experience,
                        Fees,
                        City,
                        Education,
                        Description,
                        image,
                        subjects,
                        Rating,
                        IsTeachesOnline,
                        Cancommute,
                        Bio,
                    } = x;
                    return (
                        //   <article key={id}>
                        //     <p>hfdjgggfig</p>
                        <div
                            key={ID}
                            className="container card"
                            style={{ marginTop: "10px" }}
                        >
                            <div className="row no-gutters">
                                <div className="col-sm-5 bg-success">
                                    <img
                                        className="card-img"
                                        width={40}
                                        height={360}
                                        src={image}
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="col-sm-7 bg-success">
                                    <div className="card-body">
                                        <h1 className="name bg-secondary">
                                            {Name}
                                        </h1>
                                        <h3>Profession: {Profession}</h3>
                                        <h5>
                                            Teaching experience: {Experience}
                                        </h5>
                                        <h5>Fees: {Fees}</h5>
                                        <h5>Location: {City}</h5>
                                        <h6>
                                            Teaching mode: {IsTeachesOnline}
                                        </h6>{" "}
                                        <h6> Age: {Age} years</h6>
                                        <p className="description">
                                            Description: {Description}
                                        </p>
                                        {/* <a href="" className="btn btn-primary">
                    Click here for more information
                  </a> */}
                                        <Link
                                            to={{
                                                pathname: `/teacher/${ID}`,
                                            }}
                                            className="text-dark"
                                        >
                                            More Info
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Teachers;
