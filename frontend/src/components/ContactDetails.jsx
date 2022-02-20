import React from 'react';

const ContactDetails= ()=>

{


return
(
    <div className= 'contactdetails'>
    <h1>ContactDetails </h1>
    <h2>contact Info: </h2>
    <h3>phone number: </h3>
    <h4>email id:  </h4>
    <input
                    type="text"
                    size="80"
                    value=""
                    placeholder="Comments"
                    style={{ width: "50", height: "100" }}
                />
                <br />
                <button> Submit</button>

    </div>
);
};
export default ContactDetails;