import {MDBRow,MDBCol,MDBCardText} from 'mdb-react-ui-kit';
import React from "react";
import Address from './Address';
const AddressRow = () => {
    return (
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Address</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBCardText className="text-muted"><Address /></MDBCardText>
            </MDBCol>
        </MDBRow>
    )
}

export default AddressRow;