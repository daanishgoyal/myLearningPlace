import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class SearchForm extends Component {
    state = {};

    handleChange = () => {};
    handleSubmit = () => {};

    render() {
        return (
            <form
                className="row gy-2 gx-3 align-items-center bg-success p-5 m-5 text-white"
                onSubmit={this.handleSubmit}
            >
                <div className="row justify-content-md-center">
                    <div className="row">
                        <div className="col" />
                        <div className="col-sm-5">
                            <h3>Search for online/home tutors</h3>
                        </div>
                        <div className="col" />
                    </div>
                    <div className="row">
                        <div className="col-sm-2" />
                        <div className="col-sm-3 m-3">
                            <input
                                type="text"
                                className="form-control"
                                id="autoSizingInput"
                                placeholder="Subject / Skill"
                            />
                        </div>
                        <div className="col-sm-3 m-3">
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
                            <Link className="searchbutton" to="/teachers">
                                {" "}
                                Search{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;
