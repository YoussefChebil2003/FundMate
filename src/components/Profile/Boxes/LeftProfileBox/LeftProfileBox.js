import {MDBCard,MDBBtn,MDBCardBody} from 'mdb-react-ui-kit';
import React from "react";
import ProfilePhoto from '../../ProfilePhoto/ProfilePhoto';
import FullName from '../../FullName/FullName';
import Address from '../../Address/Address';
const LeftProfileBox = () => {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
                <ProfilePhoto/> 
                <FullName/>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4"><Address/></p>
                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default LeftProfileBox;