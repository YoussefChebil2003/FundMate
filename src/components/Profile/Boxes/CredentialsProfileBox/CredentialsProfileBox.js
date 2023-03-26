

import {MDBCard,MDBCardBody} from 'mdb-react-ui-kit';
import React from "react";
import FullNameRow from '../../FullName/FullNameRow';
import EmailRow from '../../Email/EmailRow';
import PhoneNbRow from '../../PhoneNb/PhoneNbRow';
import AddressRow from '../../Address/AddressRow';
const CredentialsProfileBox = () => {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody>
                <FullNameRow />
                <hr />
                <EmailRow />
                <hr />
                <PhoneNbRow />
                <hr />
                <AddressRow />
            </MDBCardBody>
        </MDBCard>
    )
}

export default CredentialsProfileBox;