import {MDBCard,MDBIcon,MDBListGroup, MDBListGroupItem, MDBCardText, MDBCardBody} from 'mdb-react-ui-kit';
import React from "react";
import ProfilePhoto from '../../ProfilePhoto/ProfilePhoto';
import FullName from '../../FullName/FullName';
import Address from '../../Address/Address';
const LeftProfileBox = () => {
    return (
        <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                        <MDBCardText>youssefchebil2003</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                        <MDBCardText>youssefchebil2003</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                        <MDBCardText>youssefchebil2003</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                        <MDBCardText>youssefchebil2003</MDBCardText>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>     
    )
}

export default LeftProfileBox;