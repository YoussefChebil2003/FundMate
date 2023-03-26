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
import UploadButton from "./uploadImageBox";
import addPhotoIcon from "./../../assets/icon/addPhoto.png";
import addVideo from "./../../assets/icon/addVideo.png";
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import MainNavBar from "../navigation/mainNavbar";

function step2() {
    return (
        <div>
            <MainNavBar></MainNavBar>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <MDBRow id="mdb-row">
                        <MDBCol id="mdb-left-col">
                            <p id="step-title" className=' h1 fw-bold'>Step 2: <br></br> Portray your Business</p>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h5 style={{fontWeight: "bold"}}>Business Name</h5>
                                <MDBInput label='business name' id='form1' type='text' className='w-100'/>
                            </div>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h5 style={{fontWeight: "bold"}}>Campaign Title</h5>
                                <MDBInput label='campaign title' id='form1' type='text' className='w-100'/>
                            </div>
                            <h5 style={{fontWeight: "bold"}}>Campaign Description</h5>
                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <textarea label='campaign description' id='form1' placeholder="describe your campaign" className='campaign-bio'/>
                            </div>
                            <div id="form-row" className='d-flex flex-row align-items-center mb-4 '>
                                <h5 style={{fontWeight: "bold"}}>Location</h5>
                                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
                            </div>
                            
                            
                        </MDBCol>

                        <MDBCol id="right-col" md='10' lg='6' className='order-1 order-lg-2 d-flex '>
                            <h5 style={{fontWeight: "bold"}}>Illustrate the campaign</h5>
                            <div class="uploads">
                                <div>
                                    <h6 style={{fontWeight: "bold"}}>Campaign Image</h6>
                                    <div className="upload-box">
                                        <img src={addPhotoIcon} style={{height:"100px", width:"100px"}}></img>
                                        <UploadButton></UploadButton>
                                    </div>
                                </div>
                                <div>
                                    <h6 style={{fontWeight: "bold"}}>Campaign Pitch</h6>
                                    <div className="upload-box">
                                        <img src={addVideo} style={{height:"100px", width:"100px"}}></img>
                                        <UploadButton></UploadButton>
                                    </div>
                                </div>            
                            </div>
                            <div>
                                <h5 style={{fontWeight: "bold"}}>Categories</h5>
                                <p>To help backers find your campaign, select a category that best suits your project</p>
                                <select style={{width: "400px"}} id="form-dropdown" class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Techhnology</option>
                                    <option value="2">Agriculture</option>
                                    <option value="3">Art</option>
                                    <option value="4">Medicine</option>
                                </select>
                            </div>
                            <div id="step-nav-div">
                                <Link to='/launch-campaign'>
                                    <MDBBtn id="step-nav-btn" className='mb-4' size='lg'>Back</MDBBtn>
                                </Link>
                                <Link to='/campaign-step3'>
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

export default step2;
