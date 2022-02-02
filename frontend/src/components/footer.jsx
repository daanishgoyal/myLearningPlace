import { React, Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
    state = {};
    render() {
        return (
            <footer
                className="row row-cols-6 py-5"
                style={{ background: "black", bottom: 0 }}
            >
                <div className="col">
                    <Link
                        to="/"
                        className="d-flex align-items-center mb-3 link-dark text-decoration-none"
                    >
                        <svg className="bi me-2" width={40} height={32}>
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </Link>
                    <p className="text-muted m-4">
                        © 2022 myLearningPlace. All rights reserved.
                    </p>
                </div>

                <div className="col"></div>

                <div className="col">
                    <h5>Help and Feedback</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Testimonials
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                FAQs
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Benefits</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                How it works - Students
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Premium Membership
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Online Teaching Guide
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                How it works - Teachers
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Guide</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Teacher Rankings
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                How to get jobs
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Applying to jobs
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Share a story
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Refer and earn
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Policy</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Feedback
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Contact us
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Refund policy
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="#" className="nav-link p-0 text-muted">
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
