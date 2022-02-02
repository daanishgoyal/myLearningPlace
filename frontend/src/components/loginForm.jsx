import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    doSubmit = () => {
        try {
            const { data } = this.state;
            localStorage.setItem("currentUser", JSON.stringify(data));
            window.location = "/";
        } catch (ex) {}
    };

    render() {
        return (
            <div className="container-fluid min-vh-100">
                <div className="row mt-5" />
                <div className="row">
                    <div className="col-sm-8 bg-success text-white">
                        <h1>Login</h1>
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
                                    {this.renderButton("Login")}
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

export default LoginForm;
