import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getSkills } from "./../services/skillsService";
import { getLocations } from "./../services/locationsService";

class SearchForm extends Component {
    state = {
        current: {
            skill: "",
            city: "",
        },
        skills: [],
        locations: [],
        errors: {},
    };

    async populateSkills() {
        const { data: skills } = await getSkills();
        this.setState({ skills });
    }

    async populateLocations() {
        const { data: locations } = await getLocations();
        this.setState({ locations });
    }

    async componentDidMount() {
        await this.populateSkills();
        await this.populateLocations();
        this.loadCurrentSelection();
    }

    loadCurrentSelection = () => {
        try {
            const current = JSON.parse(localStorage.getItem("currentSearch"));
            if (current) this.setState({ current });
        } catch {}
    };

    handleChange = (e) => {
        const current = { ...this.state.current };
        current[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ current });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { current } = this.state;
        localStorage.setItem("currentSearch", JSON.stringify(current));

        this.props.onSubmit(current);
        window.location = "/teachers";
    };

    validate = () => {
        const current = { ...this.state.current };
        return (
            (current.skill === "" || current.skill === "Subject/Skill") &&
            (current.city === "" || current.city === "Location")
        );
    };

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
                            {/* <input
                                type="text"
                                className="form-control"
                                id="autoSizingInput"
                                placeholder="Subject / Skill"
                            /> */}
                            <select
                                name="skill"
                                id="skill"
                                className="form-control"
                                value={this.state.current.skill}
                                onChange={this.handleChange}
                            >
                                <option value="" className="text-secondary">
                                    Subject / Skill
                                </option>
                                {/* <option value="" /> */}
                                {this.state.skills.map((skill) => (
                                    <option
                                        key={skill.SkillName}
                                        value={skill.SkillName}
                                    >
                                        {skill.SkillName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-sm-3 m-3">
                            <div className="input-group">
                                {/* <input
                                    type="text"
                                    className="form-control"
                                    id="autoSizingInputGroup"
                                    placeholder="Location"
                                /> */}
                                <select
                                    name="city"
                                    id="city"
                                    className="form-control"
                                    value={this.state.current.city}
                                    onChange={this.handleChange}
                                >
                                    <option value="" className="text-secondary">
                                        Location
                                    </option>
                                    {/* <option value="" /> */}
                                    {this.state.locations.map((location) => (
                                        <option
                                            key={location.City}
                                            value={location.City}
                                        >
                                            {location.City}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 m-3">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={this.validate()}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;
