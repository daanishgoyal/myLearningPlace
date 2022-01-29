import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { ImageBackground, View, Text } from "react-native";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.css";

class HomePage extends Component {
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
            <div>
                <form
                    className="row gy-2 gx-3 align-items-center bg-success p-5 m-5 text-white"
                    onSubmit={this.handleSubmit}
                >
                    <div className="row justify-content-md-center">
                        <div className="row-auto">
                            <h3>Search for online/home tutors</h3>
                        </div>

                        <div className="col-auto m-3">
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
                        <div className="col-auto m-3">
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
                        <div className="col-auto m-3">
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <div className="row gy-2 gx-3 align-items-center bg-dark p-2 text-white">
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
                        Only 55.1% of our applicants who apply make it through
                        to our panel of teachers
                    </h2>
                </div>
                <div className="m-5"></div>
                <div className="container">
                    <img
                        src="https://png.pngtree.com/background/20210711/original/pngtree-electronic-technology-website-texture-background-banner-picture-image_1065222.jpg"
                        alt="Snow"
                    />
                    <h1 className="top-center">
                        The best place to learn all your favourite stuff!
                    </h1>
                    <div className="centered lead">
                        MyLearningPlace.com is a free website, trusted by
                        thousands of students and teachers, all over the world.
                        You can find local tutors, online teachers, and teachers
                        to help with tutoring, coaching, assignments, academic
                        projects, and dissertations for over 4500 subjects.
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
