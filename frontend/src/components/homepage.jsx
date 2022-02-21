import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.css";
import SearchForm from "./searchForm";
import Teachers from "./teachers/Teachers.component";

class HomePage extends Component {
  routeChange = () => {
    let path = `/teachers`;
    const navigate = useNavigate();
    navigate(path, { replace: true });
  };

  //state = {};

  constructor(props) {
    super(props);
    this.state = { searchList: [] };
    //     this.handleChange = this.handleChange.bind(this);
     this.setSearchResult = this.setSearchResult.bind(this);
  }

  // handleChange = () => {};
  // handleSubmit = () => {};
  setSearchResult = (result) => {
    this.setState({ searchList: result });
  };

  render() {
    console.log('list 0', this.state.searchList)

    return (
      <div className="container">
        <div className="col" />
        <div className="col">
          <div className="row-sm-1 sticky">
            <div className="col-sm-12">
              <SearchForm setSearchResult={this.setSearchResult}/>
            </div>
          </div>

          <div className="row-sm-1 ">
            <div className="col-sm-12">
              <Teachers dataToList={this.state.searchList}/>
            </div>
          </div>


          <div className="row-sm-1">
            <div className="col-sm-12">
              <div className="row gy-2 gx-3 align-items-center bg-dark p-5 m-5 text-white">
                <h2
                  className="text-center margin-top-20 color-white"
                  style={{ fontSize: "27px" }}
                >
                  Teachers from all over the world!
                </h2>
                <h2
                  className="text-center margin-top-20 color-white"
                  style={{ fontSize: "27px" }}
                >
                  Only 51% of applicants who apply make it through to our panel
                  of teachers
                </h2>
              </div>
            </div>
          </div>
          <div className="row-sm-10">
            <div className="col-sm-12">
              <div className="row gy-2 gx-3 align-items-center p-5 m-5 background text-white">
                <h1 className="text-center color-white">
                  The best place to learn all your favourite stuff!
                </h1>
                <h4
                  className="text-center lead color-white"
                  style={{ fontSize: "20px" }}
                >
                  myLearningPlace is a free website, trusted by thousands of
                  students and teachers, all over the world. You can find local
                  tutors, online teachers, and teachers to help with tutoring,
                  coaching, assignments, academic projects, and dissertations
                  for over 100 subjects.
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
