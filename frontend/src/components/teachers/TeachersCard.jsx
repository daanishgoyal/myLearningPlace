import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        imagePath: "",
    };

    componentDidMount() {
        const { teacherData } = this.props;
        this.setState({
            ID: teacherData.ID,
            Name: teacherData.Name,
            Age: teacherData.Age,
            Profession: teacherData.Profession,
            Experience: teacherData.Experience,
            Fees: teacherData.Fees,
            Location: teacherData.Location,
            // teachingmode: teacherData.teachingmode,
            Description: teacherData.Description,
            // imagePath: teacherData.image,
        });
    }

    render() {
        const {
            ID,
            Name,
            Age,
            Profession,
            Experience,
            Fees,
            Location,
            // teachingmode,
            Description,
            // imagePath,
        } = this.state;

        return (
            <div key={ID} className="container" style={{ marginTop: "20px" }}>
                <div className="row no-gutters">
                    <div className="col-sm-5 bg-dark">
                        {/* <img
                            className="card-img"
                            width={40}
                            height={360}
                            src={imagePath}
                            alt=""
                        /> */}
                    </div>
                    <div className="col-sm-7 bg-dark">
                        <div className="card-body">
                            <h1 className="Name bg-success text-light">
                                {Name}
                            </h1>
                            <h5>Profession: {Profession}</h5>
                            <h5>Teaching Experience: {Experience}</h5>
                            <h5>Fees: {Fees}</h5>
                            <h5>Location: {Location}</h5>
                            {/* <h5>Teaching mode: {teachingmode}</h5>{" "} */}
                            <h5> Age: {Age} years</h5>
                            <h5 className="Description">
                                Description: {Description}
                            </h5>
                            <Link
                                to={{
                                    pathname: `/teacher/${ID}`,
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
