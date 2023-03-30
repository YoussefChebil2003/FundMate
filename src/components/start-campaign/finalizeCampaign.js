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
import MainNavBar from "../navigation/mainNavbar";
import { Link } from "react-router-dom";
import FinEdBot from "../FinEdBot/FinEdBot"

function FinalizeCampaign2(){
    return (
        <div>
            <MainNavBar></MainNavBar>
            <FinEdBot></FinEdBot>
            <MDBContainer fluid id='mdb-container'>
                <MDBCard style={{display:"flex", alignItems:"center", justifyContent:"center", borderRadius: '25px', textAlign:"center", gap:"30px"}} id='mdb-card' className='text-black m-5'>
                    <p>Congratulations! <br></br> You have successfuly launched your campaign. </p>
                    <Link to='/' style={{margin:"0 auto"}}>
                        <MDBBtn>Return Home</MDBBtn>
                    </Link>
                </MDBCard>
            </MDBContainer>
        </div>
        
    );
}

export default FinalizeCampaign2;
