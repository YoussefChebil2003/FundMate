import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MDBContainer, MDBCard, MDBBtn } from 'mdb-react-ui-kit';
import "../../stylesheets/css/campaign.css";
import { Link } from 'react-router-dom';
import MainNavBar from '../navigation/mainNavbar';

const VerifyingBP = () => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVerified(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <MainNavBar></MainNavBar>
            <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <div id="loading-div">
                    <div class="text-center">
                        {verified ? (
                            <>
                                <p>Your Business Plan has been successfully verified.</p>
                                <Link to="/campaign-step5">
                                    <MDBBtn>Proceed</MDBBtn>
                                </Link>
                            </>
                        ) : (
                        <>
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <p style={{color:'grey', textAlign:'center'}}>Please wait while we verify your Business Plan</p>
                        </>
                        )}
                    </div>  
                    
                </div>
            </MDBCard>    
        </MDBContainer>
        </>
        
    );
}

export default VerifyingBP;