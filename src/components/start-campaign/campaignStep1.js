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

import { Link } from "react-router-dom";
import step1Photo from "../../assets/img/img_01.png"
import "../../stylesheets/css/campaign.css"
import FinEdBot from "../FinEdBot/FinEdBot";

function rememberChoice(){
    console.log("investor OR donator?")
}

function step1() {
    return (
        <div>
            <MDBContainer fluid id='mdb-container'>
            <FinEdBot></FinEdBot>
            <MDBCard id='mdb-card-launch-campaign' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody id='mdb-cardbody'>
                    <div className="row">
                        <div id='launch-campaign-design' className="col">
                            <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Launch Your Fundraising Campaign</p>
                            <MDBCardImage src={step1Photo} fluid/>
                        </div>

                        <div id='launch-campaign-design' className="col">
                            <h3>Choose a Fundraising service</h3>
                            <div id="fundrasing-options" className='mb-4'>
                                <Link to='/campaign-step2'>
                                    <button onclick={rememberChoice()} id="fundraising-options-btn" className='mb-4' size='lg'>Donation</button>
                                </Link>
                                <Link to='/campaign-step2'>
                                    <button onclick={rememberChoice()} id="fundraising-options-btn" className='mb-4' size='lg'>Investment</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </div>
        
    );
}

export default step1;
