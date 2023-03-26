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
import TeamIcon from "./../../assets/icon/TeamIcon.png";
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import MainNavBar from "../navigation/mainNavbar";

function step5() {
    return (
        <div>
            <MainNavBar></MainNavBar>
            <MDBContainer fluid id='mdb-container'>
                <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody id='mdb-cardbody'>
                        <MDBCol>
                            <p id="step-title" className=' h1 fw-bold'>Step 5: <br></br> Business Plan</p>
                            <Link to='/campaign-step5/verifying'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Submit</MDBBtn>
                            </Link>
                        </MDBCol>
                        <MDBCol>
                            <div id="step-nav-div">
                                <Link to='/campaign-step4'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Back</MDBBtn>
                                </Link>
                                <Link to='/campaign-finalization'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Next</MDBBtn>
                                </Link>
                            </div>
                        </MDBCol>
                    </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </div>
        
    );
}

export default step5;
