import React from "react";
import MainNavBar from "../components/navigation/mainNavbar";
import backgroundImage from "../assets/img/background1.png"

import "../stylesheets/css/main-navbar.css"
import "../stylesheets/css/home-page.css"

import { MDBBtn } from "mdb-react-ui-kit";

function launchCampaign() {
    return (
        <div className='home-page'>
            <div id="home-background">
                <div id="slogan">
                    <h1>More than a Solution</h1>
                    <h2>A Catalyst for Change</h2>
                </div>
                <div id="home-btns">
                    <MDBBtn>Invest</MDBBtn>
                    <MDBBtn>Donate</MDBBtn>  
                </div>          
            </div>
        </div>
        
    );
}

export default launchCampaign;
