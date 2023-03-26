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

function step3() {
    return (
        <div>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow>
                        <MDBCol id="left-col" md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column'>
                            <p id="step-title" className=' h1 fw-bold'>Step 3: <br></br> Portray your Team</p>
                            <img src={TeamIcon} style={{height: "300px", width: "450px"}} fluid/>
                        </MDBCol>

                        <MDBCol id="right-col" md='10' lg='6' className='order-1 order-lg-2 d-flex '>
                            
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h5 style={{fontWeight: "bold"}}>Team Name</h5>
                                <MDBInput label='team name' id='form1' type='text' className='w-100'/>
                            </div>
                            <h5 style={{fontWeight: "bold"}}>Team Description</h5>
                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <textarea label='campaign description' id='form1' placeholder="describe your team" className='campaign-bio'/>
                            </div>
                            <div id="step-nav-div">
                                <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Back</MDBBtn>
                                <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Next</MDBBtn>
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
