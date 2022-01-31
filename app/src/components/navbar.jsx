import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";

// Stateless Functional Components
// If you dont need a the full implementation of a className when you can accomplish the same with a lambda, you use SFCs.

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    MyLearningPlace
                </NavLink>
                <li className="nav-item dropdown">
                    <NavLink
                        className="nav-link dropdown-toggle bg-dark text-light"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                    >
                        Login
                    </NavLink>
                    <ul className="dropdown-menu me-5 bg-dark">
                        <li>
                            <NavLink className="dropdown-item bg-dark" to="/">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="dropdown-item bg-dark" to="/">
                                Sign-up
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </div>
        </nav>
    );
};

export default NavBar;
