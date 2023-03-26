import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MDBContainer, MDBCard } from 'mdb-react-ui-kit';
import "../../stylesheets/css/campaign.css"

function verifyingBP() {
    return (
        <MDBContainer fluid id='mdb-container'>
            <MDBCard id='mdb-card' className='text-black m-5' style={{ borderRadius: '25px' }}>
                <div id="loading-div">
                    <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>  
                    <p style={{color:'grey', textAlign:'center'}}>Please wait while we verify your Business Plan</p>
                </div>
            </MDBCard>    
        </MDBContainer>
    );
}

export default verifyingBP;