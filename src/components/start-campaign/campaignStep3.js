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


function step3() {
    return (
        <div>
            <MainNavBar></MainNavBar>
            <FinEdBot></FinEdBot>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow>
                        <MDBCol id="mdb-left-col">
                            <p id="step-title" className=' h1 fw-bold'>Step 3: <br></br> Portray your Team</p>
                            <img src={TeamIcon} style={{height: "300px", width: "450px"}} fluid/>
                        </MDBCol>

                        <MDBCol id="right-col" md='10' lg='6' className='order-1 order-lg-2 d-flex '>
                            
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h4 style={{fontWeight: "bold"}}>Team Name</h4>
                                <MDBInput label='team name' id='form1' type='text' className='w-100'/>
                            </div>
                            <h4 style={{fontWeight: "bold"}}>Team Description</h4>
                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <textarea label='campaign description' id='form1' placeholder="describe your team" className='campaign-bio'/>
                            </div>
                            <div id="step-nav-div">
                                <Link to='/campaign-step2'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Back</MDBBtn>
                                </Link>
                                <Link to='/campaign-step4-donators'>
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

export default step3;
