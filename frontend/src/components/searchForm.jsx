import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class SearchForm extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = {subject:'', location:''};
        
    }
   
    

    handleChangeSubject = (event) => { //storing the subject or skill and then settings state
       //console.log('event: ', event); //event.target.value
       this.setState({subject:event.target.value});
    };
 

    handleChangeLocation = (event) => { //storing the location and setting the state
        //console.log('event: ', event); //event.target.value
        this.setState({location:event.target.value});
     };

   
   
    handleClick = () => {

        axios.post("http://localhost:8080/api/search",{city: this.state.location,skill:this.state.subject})
         .then(res => {
            console.log('props', this.props);
            this.props.setSearchResult(res.data.data);//calling setsearch rsult function with params
           // this.setState({searchResult: res.data.data});
            console.log(res)
         });
    };

    render() {
    console.log('searchform list1', this.state)
        return (
            <div
                className="row gy-2 gx-3 align-items-center bg-success p-5 m-5 text-white"
    
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
                                value={this.state.subject}
                                onChange={this.handleChangeSubject}
                            />
                        </div>
                        <div className="col-sm-3 m-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="autoSizingInputGroup"
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={this.handleChangeLocation}
                                />
                            </div>
                        </div>
                        <div className="col-sm-2 m-3">
                            <button
                            //type="button"
                            className="btn btn-primary"
                            onClick={this.handleClick}
                        >
                            Search
                        </button>

                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default SearchForm;
