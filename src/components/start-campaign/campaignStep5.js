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
import bpPhoto from "../../assets/icon/businessPlan.png"
import UploadButton from "./uploadImageBox";
import FinEdBot from "../FinEdBot/FinEdBot"



function step5() {
    return (
        <div>
            <MainNavBar></MainNavBar>
            <FinEdBot></FinEdBot>
            <MDBContainer fluid id='mdb-container'>
                <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody id='mdb-cardbody'>
                        <MDBCol>
                            <p id="step-title" className=' h1 fw-bold'>Step 5: Business Plan</p>
                            <div id="bp-div">
                                <h2>Upload your Business Plan</h2>
                                <p>The following will be thouroughly verified in order to grant you access to our crowdfunding services.</p>
                                <img src={bpPhoto} style={{height: "100px", width:"100px"}}></img>
                                <UploadButton></UploadButton>
                                <Link to='/campaign-step5/verifying'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Submit</MDBBtn>
                                </Link>  
                            </div>               
                        </MDBCol>
                        <MDBCol>
                            <div id="step-nav-div">
                                <Link to='/campaign-step4-donators'>
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
