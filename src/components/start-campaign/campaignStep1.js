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
import { Link } from "react-router-dom";
import MainNavBar from "../navigation/mainNavbar";

function step1() {
    return (
        <div>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column'>
                            <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Launch Your Fundraising Campaign</p>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                        </MDBCol>

                        <MDBCol id="mdb-right-col" md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <h3>Choose a Fundraising service</h3>
                            <div id="fundrasing-options" className='mb-4'>
                                <Link to='/campaign-step2'>
                                    <MDBBtn id="fundrasing-options-btn" className='mb-4' size='lg'>Donation</MDBBtn>
                                </Link>
                                <Link to='/campaign-step2'>
                                    <MDBBtn id="fundrasing-options-btn" className='mb-4' size='lg'>Investment</MDBBtn>
                                </Link>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </div>
        
    );
}

export default step1;
