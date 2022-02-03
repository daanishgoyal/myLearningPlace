import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name"),
    };

    doSubmit = () => {
        try {
            window.location = "/login";
        } catch (ex) {
            console.log(ex);
        }
    };

    render() {
        return (
            <div className="container-fluid min-vh-100">
                <div className="row mt-5" />
                <div className="row">
                    <div className="col-sm-8 bg-success text-white">
                        <h1>Register</h1>
                    </div>
                    <div className="col-sm-8" />
                </div>
                <div className="row" />
                <div className="row">
                    <div className="col-sm-8 bg-secondary">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row mt-4" />
                            <div className="row">
                                <div className="col-sm-8">
                                    {this.renderInput("username", "Username")}
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-3" />
                            <div className="row">
                                <div className="col-sm-8">
                                    {this.renderInput(
                                        "password",
                                        "Password",
                                        "password"
                                    )}
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-3" />
                            <div className="row">
                                <div className="col-sm-8">
                                    {this.renderInput("name", "Name")}
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-3" />
                            <div className="row">
                                <div className="col-sm-8">
                                    {this.renderButton("Register")}
                                </div>
                                <div className="col-sm-8" />
                            </div>
                            <div className="row mt-3" />
                        </form>
                    </div>
                    <div className="col-sm-8" />
                </div>
            </div>
        );
    }
}

export default RegisterForm;
