import React from "react";

import { Link } from "react-router-dom";

const Teachers = ({ datatolist }) => {
    return (
        <div>
            {datatolist &&
                datatolist.map((x) => {
                    const {
                        id,
                        name,
                        age,
                        profession,
                        experience,
                        fees,
                        location,
                        teachingmode,
                        description,
                        image,
                        subjects,
                        education,
                        online,
                        studenthome,
                        bio,
                    } = x;
                    return (
                        //   <article key={id}>
                        //     <p>hfdjgggfig</p>
                        <div
                            key={id}
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
                                            {name}
                                        </h1>
                                        <h3>Profession: {profession}</h3>
                                        <h5>
                                            Teaching experience: {experience}
                                        </h5>
                                        <h5>Fees: {fees}</h5>
                                        <h5>Location: {location}</h5>
                                        <h6>
                                            Teaching mode: {teachingmode}
                                        </h6>{" "}
                                        <h6> Age: {age} years</h6>
                                        <p className="description">
                                            Description: {description}
                                        </p>
                                        {/* <a href="" className="btn btn-primary">
                    Click here for more information
                  </a> */}
                                        <Link
                                            to={{
                                                pathname: `/teacher/${id}`,
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
