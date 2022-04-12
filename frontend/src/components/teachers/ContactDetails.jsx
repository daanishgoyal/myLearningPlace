import { React, Component } from "react";
import { getContactDetails } from "../../services/contactDetailsService";
import { Link } from "react-router-dom";
import "./ContactDetails.css";
class ContactDetails extends Component {
    state = {
        teacherId: 0,
        contactDetails: [],
    };

    async componentDidMount() {
        try {
            const { teacherId } = this.props;
            this.setState({ teacherId });
            const { data: contactDetails } = await getContactDetails(teacherId);
            this.setState({ contactDetails });
        } catch {}
    }

    render() {
        const { contactDetails } = this.state;
        // console.log(contactDetails);

        return (
            <div className="container ">
                <h6 className="d-flex flex-row align-items-center"> </h6>
                {contactDetails.map((contact, index) => {
                    return (
                        <div className="text-center" key={index}>
                            <div className="comment-text font-weight-bold h6">
                                &#9993;
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        window.location =
                                            "mailto:" + contact.Teacher_Email;
                                        e.preventDefault();
                                    }}
                                >
                                    {" "}
                                    {contact.Teacher_Email}
                                </Link>
                            </div>
                            <div className="name comment-text font-weight-bold h6">
                                &#128222; {contact.Teacher_MobileNumber}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ContactDetails;
