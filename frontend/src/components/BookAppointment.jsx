import { render } from '@testing-library/react';
import React from 'react';

const BookAppointment= ()=>

{


return
    (

    <div >
    <h1>Bookappointment </h1>
    <h2>Available slots</h2>
    <select id="selector">
         <option>slot 1: 6 -7 AM</option>
         <option>slot 2: 7 -8 AM</option>
         <option >slot 3: 6 -7 PM</option>
         <option>slot 4: 7 -8 PM</option>
       </select>
       <button>select slot</button> <br/>
       <button> Confirm Appointment</button>
       
    </div>
 
   );
};
export default BookAppointment;