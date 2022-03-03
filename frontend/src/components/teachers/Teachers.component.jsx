import React, { Component } from "react";
import SearchForm from "./../searchForm";
import TeachersCard from "./TeachersCard";
import "./Teachers.component.css";
import { searchTeachers } from "../../services/searchService";

class Teachers extends Component {
    state = {
        currentSearch: {
            city: "",
            skill: "",
        },
        teacherList: [],
    };

    async componentDidMount() {
        try {
            this.loadCurrentSelection(); // when loading from home page
            const { data: teachers } = await searchTeachers(
                this.state.currentSearch
            );

            if (!teachers) {
                window.location = "/teachersNotFound";
                return;
            }
            this.setState({ teacherList: teachers });

            // for now displaying dummy data using props as below; have to eventually use line above;
            //this.setState({ teacherList: this.props.teacherList });
        } catch {}
    }

    loadCurrentSelection = () => {
        try {
            if (
                this.state.currentSearch.city !== "" &&
                this.state.currentSearch.skill !== ""
            )
                return;
            const search = JSON.parse(localStorage.getItem("currentSearch"));
            if (search) {
                const { city, skill } = search;
                const { currentSearch } = { ...this.state };
                currentSearch.city = city;
                currentSearch.skill = skill;
                this.setState({ currentSearch: currentSearch });
            }
        } catch {}
    };

    handleSubmit = (currentSelection) => {
        if (currentSelection)
            this.setState({ currentSearch: currentSelection });
    };

    render() {
        return (
            <div className="container">
                <div className="col" />
                <div className="col">
                    <div className="row-sm-1 sticky">
                        <div className="col-sm-12">
                            <SearchForm onSubmit={this.handleSubmit} />
                        </div>
                    </div>
                    <div className="row-sm-12">
                        <div className="col-sm-12">
                            <div className="row gy-2 gx-3 align-items-center bg-dark p-5 m-5 text-white">
                                {this.state.teacherList.map((teacher) => {
                                    return (
                                        <TeachersCard
                                            key={teacher.ID}
                                            teacherData={teacher}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row-sm-10">
                        <div className="col-sm-12">
                            <div className="row gy-2 gx-3 align-items-center p-5 m-5 text-white"></div>
                        </div>
                    </div>
                </div>
                <div className="col" />
            </div>
        );
    }
}
export default Teachers;
