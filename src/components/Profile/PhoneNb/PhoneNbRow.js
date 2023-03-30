import {MDBRow,MDBCol,MDBCardText} from 'mdb-react-ui-kit';
import React from "react";
const PhoneNbRow = () => {
    return (
      <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Mobile Phone</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className='text-muted'>(+216) 12 345 678</MDBCardText>
          </MDBCol>  
      </MDBRow>
    );
    
}

export default PhoneNbRow;