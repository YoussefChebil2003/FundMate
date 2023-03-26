import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from "mdb-react-ui-kit"
import "../../stylesheets/css/campaign.css"

function step0() {
    return (
        <div>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column'>
                            <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Let's Get Ready to Launch Your Fundraising Campaign</p>
                            <p>Please fll out the information below, to help us figure out the best fundrasing service for your business</p>
                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <h5>Enter date of creation of the business</h5>
                            <h5>Enter range of businesse's actual income</h5>
                            <h5>Enter how many people in your team</h5>
                            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </div>
        
    );
}

export default step0;
