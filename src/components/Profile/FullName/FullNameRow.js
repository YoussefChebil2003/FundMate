
import {MDBRow, MDBCol,MDBCardText} from 'mdb-react-ui-kit';
import React from "react";
const FullNameRow = () => {
    return (
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Full Name</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBCardText className="text-muted">Youssef Chebil</MDBCardText>
            </MDBCol>
        </MDBRow>  
    )
    
}

export default FullNameRow;