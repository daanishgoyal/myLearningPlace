import React, { Component } from "react";

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
            <form
                className="row gy-2 gx-3 align-items-center bg-success p-2 text-white"
                onSubmit={this.handleSubmit}
            >
                <div className="row justify-content-md-center">
                    <div className="col-auto">
                        <label
                            className="visually-hidden"
                            for="autoSizingInput"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="autoSizingInput"
                            placeholder="Subject / Skill"
                        />
                    </div>
                    <div className="col-auto">
                        <label
                            className="visually-hidden"
                            for="autoSizingInputGroup"
                        >
                            Username
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="autoSizingInputGroup"
                                placeholder="Location"
                            />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default HomePage;
