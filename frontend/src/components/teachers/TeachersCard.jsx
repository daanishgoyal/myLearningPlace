import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeachersCard extends Component {
    state = {
        id: -1,
        name: "",
        age: -1,
        profession: "",
        experience: "",
        fees: "",
        location: "",
        teachingmode: "",
        description: "",
        imagePath: "",
    };

    componentDidMount() {
        const { teacherData } = this.props;
        this.setState({
            id: teacherData.id,
            name: teacherData.name,
            age: teacherData.age,
            profession: teacherData.profession,
            experience: teacherData.experience,
            fees: teacherData.fees,
            location: teacherData.location,
            teachingmode: teacherData.teachingmode,
            description: teacherData.description,
            imagePath: teacherData.image,
        });
    }

    render() {
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
            imagePath,
        } = this.state;

        return (
            <div key={id} className="container" style={{ marginTop: "20px" }}>
                <div className="row no-gutters">
                    <div className="col-sm-5 bg-dark">
                        <img
                            className="card-img"
                            width={40}
                            height={360}
                            src={imagePath}
                            alt=""
                        />
                    </div>
                    <div className="col-sm-7 bg-dark">
                        <div className="card-body">
                            <h1 className="name bg-success text-light">
                                {name}
                            </h1>
                            <h5>Profession: {profession}</h5>
                            <h5>Teaching experience: {experience}</h5>
                            <h5>Fees: {fees}</h5>
                            <h5>Location: {location}</h5>
                            <h5>Teaching mode: {teachingmode}</h5>{" "}
                            <h5> Age: {age} years</h5>
                            <h5 className="description">
                                Description: {description}
                            </h5>
                            <Link
                                to={{
                                    pathname: `/teacher/${id}`,
                                }}
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
