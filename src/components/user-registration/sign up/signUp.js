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

const signUp = () => {
    return (
        <MDBContainer style={{display:"flex", justifyContent:"center" }} fluid id='mdb-container' >
            <MDBCard id='mdb-card' className='text-black m-5' style={{ width:"1200px", borderRadius: '25px'}}>
                <MDBCardBody id='mdb-cardbody'>
                    <div id="mdb-row" style={{display:"flex !important"}}>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>

                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <MDBIcon fas icon='user me-3' size='lg' />
                                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
                            </div>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='envelope me-3' size='lg' />
                                <MDBInput label='Your Email' id='form2' type='email' />
                            </div>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='lock me-3' size='lg' />
                                <MDBInput label='Password' id='form3' type='password' />
                            </div>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='key me-3' size='lg' />
                                <MDBInput label='Repeat your password' id='form4' type='password'/>
                            </div>

                            <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter'/>
                            </div>
                            <Link to="/login">
                                <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
                            </Link>
                            
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


export default signUp; 