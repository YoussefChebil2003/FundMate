import {MDBBreadcrumb,MDBBreadcrumbItem,MDBCol, MDBRow} from 'mdb-react-ui-kit';
import React from "react";
const ProfileHeaderBox = () => {
    return (
        <MDBRow>
            <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                    <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>
                    User Profile
                </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBCol>
        </MDBRow>
    )
}

export default ProfileHeaderBox;