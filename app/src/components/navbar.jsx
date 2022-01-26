import React, { Component } from "react";

// Stateless Functional Components
// If you dont need a the full implementation of a class when you can accomplish the same with a lambda, you use SFCs.

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyLearningPlace
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
