import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.css";

class HomePage extends Component {

    routeChange = () =>{ 
        let path = `/teachers`; 
        const navigate = useNavigate();
        navigate(path, { replace: true });
    }

    state = {};
    //   constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

    handleChange = () => {};
    handleSubmit = () => {};

    render() {
        return (
            <div className="container">
                <div className="col" />
                <div className="col">
                    <div className="row-sm-1 sticky">
                        <div className="col-sm-12">
                            <form
                                className="row gy-2 gx-3 align-items-center bg-success p-5 m-5 text-white"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="row justify-content-md-center">
                                    <div className="row">
                                        <div className="col" />
                                        <div className="col-sm-5">
                                            <h3>
                                                Search for online/home tutors
                                            </h3>
                                        </div>
                                        <div className="col" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2" />
                                        <div className="col-sm-3 m-3">
                                            {/* <label
                                className="visually-hidden"
                                htmlFor="autoSizingInput"
                            >
                                Name
                            </label> */}
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="autoSizingInput"
                                                placeholder="Subject / Skill"
                                            />
                                        </div>
                                        <div className="col-sm-3 m-3">
                                            {/* <label
                                className="visually-hidden"
                                htmlFor="autoSizingInputGroup"
                            >
                                Username
                            </label> */}
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="autoSizingInputGroup"
                                                    placeholder="Location"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-2 m-3">
                                            {/* <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={this.routeChange}
                                            >
                                                Search
                                            </button> */}
                                            <Link className= 'searchbutton' to= '/teachers'> Search </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row-sm-1">
                        <div className="col-sm-12">
                            <div className="row gy-2 gx-3 align-items-center bg-dark p-5 m-5 text-white">
                                <h2
                                    className="text-center margin-top-20 color-white"
                                    style={{ fontSize: "27px" }}
                                >
                                    Teachers from over 125 countries
                                </h2>
                                <h2
                                    className="text-center margin-top-20 color-white"
                                    style={{ fontSize: "27px" }}
                                >
                                    Only 55.1% of our applicants who apply make
                                    it through to our panel of teachers
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row-sm-10">
                        <div className="col-sm-12">
                            <div className="row gy-2 gx-3 align-items-center p-5 m-5 background text-white">
                                <h1 className="text-center color-white">
                                    The best place to learn all your favourite
                                    stuff!
                                </h1>
                                <h4
                                    className="text-center lead color-white"
                                    style={{ fontSize: "20px" }}
                                >
                                    MyLearningPlace.com is a free website,
                                    trusted by thousands of students and
                                    teachers, all over the world. You can find
                                    local tutors, online teachers, and teachers
                                    to help with tutoring, coaching,
                                    assignments, academic projects, and
                                    dissertations for over 4500 subjects.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" />
            </div>
        );
    }
}

export default HomePage;
