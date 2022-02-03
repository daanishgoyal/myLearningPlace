import React from "react";

import { Link } from "react-router-dom";

const Teachers = ({ datatolist }) => {
<<<<<<< Updated upstream
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
                    } = x;
                    return (
                        //   <article key={id}>
                        //     <p>hfdjgggfig</p>
                        <div className="container">
                            <div
                                key={id}
                                className="card"
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
                                    <div class="col-sm-7 bg-success">
                                        <div className="card-body">
                                            <h1 className="name bg-secondary">
                                                {name}
                                            </h1>
                                            <h2> Age: {age} years</h2>
                                            <h3>Profession: {profession}</h3>
                                            <h4>
                                                Teaching experience:{" "}
                                                {experience}
                                            </h4>
                                            <h5>Fees : {fees}</h5>
                                            <h6>Location : {location}</h6>
                                            <h7>
                                                Teaching mode : {teachingmode}
                                            </h7>{" "}
                                            <br />
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
                                            >
                                                More Info
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
=======
  
  return (
    <div >
      {datatolist && datatolist.map((x) => {
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
        } = x;
        return (
        
        <div className="container">
            <div key={id} className="card" style={{marginTop:"10px"}} >
            <div className="row no-gutters">
              <div className="col-sm-5" >
               <img className="card-img" width={35} height={330} src={image} alt="Card image cap" />
              </div>
              <div class="col-sm-7">
              <div className="card-body">
               
               <h1 className="name">{name}</h1>
                  <h2> Age: {age} years</h2>
                  <h3>Profession: {profession}</h3>
                  <h4>Teaching experience: {experience}</h4>
                  <h5>Fees : {fees}</h5>
                  <h6>Location : {location}</h6>
                  <h7>Teaching mode : {teachingmode}</h7> <br />
                  {/* <p className="description">
                  Description: {description}
                  </p> */}
                  {/* <a href="" className="btn btn-primary">
                    Click here for more information
                  </a> */}
                  <br/>
                  <Link to={{pathname:`/teacher/${id}`}}>More Info</Link>
                  </div>
    </div>   
            </div>
            </div>
      </div>
        
        );
      })}
    </div>
    
  );
>>>>>>> Stashed changes
};

export default Teachers;
