import { React, Component } from "react";
import { getContactDetails } from "../../services/contactDetailsService";
import "./ContactDetails.css";
class ContactDetails extends Component {
    state = {
        teacherId: 0,
        contactDetails: [],
    };

    async componentDidMount() {
        const { teacherId } = this.props;
        this.setState({ teacherId });
        const { data: contactDetails } = await getContactDetails(teacherId);
        this.setState({ contactDetails });
    }

    //  sendMail() {
    //     var link = contactDetails.map((contact, index) => {
    //         contact.Teacher_Email}))
    //              + "&subject=" + encodeURIComponent("Appointment Booking")
    //              + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    //     ;

    //     window.location.href = link;
    // }

    render() {
        const { contactDetails } = this.state;
        // console.log(contactDetails);

        return (
            <div className="container ">
                <h6 className="d-flex flex-row align-items-center"> </h6>
                {contactDetails.map((contact, index) => {
                    return (
                        <div className="text-center" key={index}>
                            <div className="name comment-text font-weight-bold h6">
                                &#128222; {contact.Teacher_MobileNumber}
                            </div>

                            <div // onClick={() =>
                                //     (window.location = {contact.Teacher_Email})
                                // }
                                className="comment-text font-weight-bold h6"
                                // onClick={sendMail()}}
                            >
                                &#9993; {contact.Teacher_Email}
                            </div>
                        </div>
                    );
                })}
            </div>

            //   <div class="container mt-5">
            //     <div class="d-flex justify-content-center row">
            //       <div class="col-md-6">
            //         <div class="p-3 ">
            //           <h6>Phone number</h6>
            //           <div class="review mt-4">
            //             <div class="d-flex flex-row comment-user">
            //               <div class="ml-2">
            //                 <div class="d-flex flex-row align-items-center">
            //                   <span class="name font-weight-bold">Hui jhong</span>
            //                   <span class="dot"></span>
            //                 </div>
            //               </div>
            //             </div>
            //             <div class="mt-2">
            //               <p class="comment-text">98888814536</p>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
        );
    }
}

export default ContactDetails;
