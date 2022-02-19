import React from "react";
import Joi from "joi-browser";
import { Navigate } from "react-router-dom";
import Form from "../common/form";
import auth from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password);

            const { state } = this.props.location;
            window.location = state ? state.from.pathname : "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        if (auth.getCurrentUser()) return <Navigate to="/" />;

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
