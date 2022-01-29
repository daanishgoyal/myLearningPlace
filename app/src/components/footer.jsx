import { React, Component } from "react";
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
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 link-dark text-decoration-none"
                    >
                        <svg className="bi me-2" width={40} height={32}>
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </a>
                    <p className="text-muted m-4">
                        © 2022 MyLearningPlace.com. All rights reserved.
                    </p>
                </div>

                <div className="col"></div>

                <div className="col">
                    <h5>Help and Feedback</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Home
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Testimonials
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                About us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Guide</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                How it works - Students
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Premium Membership
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Online Teaching Guide
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                How it works - Teachers
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Guide</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Teacher Rankings
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                How to get jobs
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Applying to jobs
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Share a story
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Refer and earn
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Policy</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Feedback
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Contact us
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Refund policy
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
