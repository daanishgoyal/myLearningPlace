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

  render() {
    const { contactDetails } = this.state;
    //console.log(contactDetails);

    return (
      <div className="container ">
        <h4 className="d-flex flex-row align-items-center"> </h4>
        {contactDetails.map((contact, index) => {
          return (
            <div key={index}>
              <label className="name font-weight-bold">
                <span>&#128222; </span> Phone Number:{" "}
                {contact.Teacher_MobileNumber}
              </label>
              <br />

              <label className="comment-text">
                {" "}
                <span>&#9993; </span>
                Email:{contact.Teacher_Email}
              </label>
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
