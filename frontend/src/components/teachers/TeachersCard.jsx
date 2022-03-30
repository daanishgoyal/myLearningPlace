import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

class TeachersCard extends Component {
    state = {
        ID: -1,
        Name: "",
        Age: -1,
        Profession: "",
        Experience: "",
        Fees: "",
        Location: "",
        teachingmode: "",
        Description: "",
        rating: "",
        imagePath: "",
    };

    componentDidMount() {
        // const path = require('path');
        // console.log('resolve', path.resolve()) ;
        const { teacherData } = this.props;
        this.setState({
            ID: teacherData.ID,
            Name: teacherData.Name,
            Age: teacherData.Age,
            Profession: teacherData.Profession,
            Experience: teacherData.Experience,
            Fees: teacherData.Fees,
            City: teacherData.City,
            isTeachesOnline: teacherData.IsTeachesOnline,
            isTeachesOffline: teacherData.IsTeachesOffline,
            Description: teacherData.Description,
            imagePath: teacherData.ImagePath,
            rating: teacherData.Rating,
        });
    }

    getTeachMode = (mode) => (mode ? "Yes" : "No");

    render() {
        const {
            ID,
            Name,
            Age,
            Profession,
            Experience,
            Fees,
            City,
            Description,
            imagePath,
            rating,
        } = this.state;
        //console.log(teachingmode);
        //console.log(imagePath);
        return (
            <div key={ID} className="container" style={{ marginTop: "20px" }}>
                <div className="row no-gutters">
                    <div className="col-sm-5 mt-3 bg-dark">
                        <img
                            className="card-img"
                            width={40}
                            height={360}
                            src={require(`../../${imagePath}`)}
                            alt=""
                        />
                    </div>
                    <div className="col-sm-7 bg-dark">
                        <div className="card-body">
                            <h1 className="Name bg-success text-light">
                                {Name}
                            </h1>
                            <h5>
                                <Rating
                                    readonly={true}
                                    allowHover={false}
                                    initialValue={0}
                                    ratingValue={rating * 10}
                                    allowHalfIcon={false}
                                    iconsCount={5}
                                    size={25}
                                />
                            </h5>
                            <h5>Profession: {Profession}</h5>
                            <h5>Teaching Experience: {Experience} years</h5>
                            <h5>Fees: ${Fees} per hour</h5>
                            <h5>Location: {City}</h5>
                            <h5>
                                Teaching mode Online:{" "}
                                {this.getTeachMode(this.state.isTeachesOnline)}
                            </h5>
                            <h5>
                                Teaching mode Offline:{" "}
                                {this.getTeachMode(this.state.isTeachesOffline)}
                            </h5>
                            {/* {" "} */}
                            <h5> Age: {Age} years</h5>
                            <h5 className="Description">
                                Description: {Description}
                            </h5>
                            <Link
                                to={{
                                    pathname: `/teacher/${ID}`,
                                }}
                                state={{ teacherData: this.props.teacherData }}
                                className="text-primary"
                            >
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeachersCard;
