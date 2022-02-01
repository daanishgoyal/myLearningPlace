import React from "react";

import {Link} from 'react-router-dom'


const Teachers = ({ datatolist }) => {
  
  return (
    <div style={{}}>
      {datatolist.map((x) => {
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
            <div key={id} className="card" style={{ width: "40rem"}}>
              <img className="image" src={image} alt="Card image cap" />
              <div className="card-body">
                <h1 className="name">{name}</h1>
              <h2> Age: {age} years</h2>
              <h3>Profession: {profession}</h3>
              <h4>Teaching experience: {experience}</h4>
              <h5>Fees : {fees}</h5>
              <h6>Location : {location}</h6>
            <h7>Teaching mode : {teachingmode}</h7> <br />
                <p className="description">
                Description: {description}
                </p>
                {/* <a href="" className="btn btn-primary">
                  Click here for more information
                </a> */}
                <Link to={{pathname:`/teacher/${id}`}}>More Info</Link>
              </div>
            </div>
        //     <img src={image} />
        //     <h1>Name: {name}</h1>
        //     <h2> Age: {age} years</h2>
        //     <h3>Profession: {profession}</h3>
        //     <h4>Teaching experience: {experience}</h4>
        //     <h5>fees : {fees}</h5>
        //     <h6>location : {location}</h6>
        //     <h7>teachingmode : {teachingmode}</h7> <br />
        //     <p>description: {description}</p>
        //     <a href="#" class="btn btn-primary">
        //       click for further information
        //     </a>
        //   </article>
        );
      })}
    </div>
  );
};

export default Teachers;
