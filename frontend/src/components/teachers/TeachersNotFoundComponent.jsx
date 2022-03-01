import React, { Component } from "react";
import SearchForm from "../searchForm";

class TeachersNotFound extends Component {
    state = {};

    handleSubmit = () => {};

    render() {
        return (
            <div className="ontainer-fluid min-vh-100">
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        <SearchForm onSubmit={this.handleSubmit} />
                    </div>
                </div>
                <br />
                <h1 className="bg-dark text-light">
                    No results found for this search
                </h1>
            </div>
        );
    }
}

export default TeachersNotFound;
