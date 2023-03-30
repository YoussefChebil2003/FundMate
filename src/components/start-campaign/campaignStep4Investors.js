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
import FinEdBot from "../FinEdBot/FinEdBot"
import bpPhoto from "../../assets/icon/businessPlan.png"

function step4Investor() {
    return (
        <div>
            <MainNavBar></MainNavBar>
            <FinEdBot></FinEdBot>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow>
                        
                        <MDBCol id="mdb-left-col">
                            <p id="step-title" className=' h1 fw-bold'>Step 4: Funding Perks</p>
                            <div id="perks-div">
                                <h2>Upload your Business Plan</h2>
                                <p>The following will be thouroughly verified in order to grant you access to our crowdfunding services.</p>
                                <img src={bpPhoto} style={{height: "100px", width:"100px"}}></img>
                                <MDBBtn>Create New Perk</MDBBtn>
                            </div>
                        </MDBCol>

                        <MDBCol id="right-col" md='10' lg='6' className='order-1 order-lg-2 d-flex '>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h4 style={{fontWeight: "bold"}}>Campaign Goal Amount & Currency</h4>
                                <MDBInput label='campaign title' id='form1' type='text' className='w-100'/>
                            </div>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h4 style={{fontWeight: "bold"}}>Campaign Duration</h4>
                                <MDBInput label='campaign title' id='form1' type='text' className='w-100'/>
                            </div>
                            <div id="step-nav-div">
                                <Link to='/campaign-step3'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Back</MDBBtn>
                                </Link>
                                <Link to='/campaign-step5'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Next</MDBBtn>
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

export default step4Investor;
