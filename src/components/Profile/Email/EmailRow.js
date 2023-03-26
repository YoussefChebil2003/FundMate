import {MDBRow,MDBCol,MDBCardText} from 'mdb-react-ui-kit';
import React from "react";
import Email from './Email';
const EmailRow = () => {
    return (
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBCardText className="text-muted"><Email /></MDBCardText>
            </MDBCol>
        </MDBRow>
    )
}

export default EmailRow;