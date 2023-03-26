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
import perksImg1 from "../../assets/img/perks1.png"
import perksImg2 from "../../assets/img/perks2.png"

function step4() {
    return (
        <div>
            <MainNavBar></MainNavBar>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow>
                        
                        <MDBCol id="mdb-left-col">
                            <p id="step-title" className=' h1 fw-bold'>Step 4: Funding Perks</p>
                            <div id="perks-div">
                                <h2>You haven't created any perks yet</h2>
                                <p>Perks are incentives to backers in exchange for their support. You may edit your perk details until the perk is claimed.</p>
                                <img src={perksImg1} style={{height: "100px", width:"100px"}}></img>
                                <img src={perksImg2} style={{height: "100px", width:"100px"}}></img>
                                <h4>Let's get Started</h4>
                                <p>Create your perks here</p>
                                <MDBBtn>Create New Perk</MDBBtn>
                            </div>
                        </MDBCol>

                        <MDBCol id="right-col" md='10' lg='6' className='order-1 order-lg-2 d-flex '>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h5 style={{fontWeight: "bold"}}>Campaign Goal Amount & Currency</h5>
                                <MDBInput label='campaign title' id='form1' type='text' className='w-100'/>
                            </div>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h5 style={{fontWeight: "bold"}}>Campaign Duration</h5>
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

export default step4;
