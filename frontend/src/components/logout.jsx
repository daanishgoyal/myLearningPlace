import { Component } from "react";

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem("currentUser");
        window.location = "/";
    }

    render() {
        return null;
    }
}

export default Logout;
