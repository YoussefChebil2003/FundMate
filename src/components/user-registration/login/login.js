import React from 'react';
import '../../../stylesheets/css/signup-page.css'
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
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <MDBContainer style={{display:"flex", justifyContent:"center" }} fluid id='mdb-container' >
            <MDBCard id='mdb-card' className='text-black m-5' style={{ width:"1200px", borderRadius: '25px'}}>
                <MDBCardBody id='mdb-cardbody'>
                    <div id="mdb-row" style={{display:"flex !important"}}>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Login</p>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='envelope me-3' size='lg' />
                                <MDBInput label='Your Email' id='form2' type='email' />
                            </div>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='lock me-3' size='lg' />
                                <MDBInput label='Password' id='form3' type='password' />
                            </div>

                            <Link to="/">
                                    <MDBBtn className='mb-4' size='lg'>Login</MDBBtn>
                                </Link>

                            <div id="link-to-sign-up">
                                <a>Don't have an account</a>
                                <Link id="go-to-register" to="/sign-up">
                                    <h4 className='mb-4' size='lg'>Register</h4>
                                </Link>
                            </div>

                            
                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                        </MDBCol>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}


export default login; 