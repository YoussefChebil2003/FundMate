import React from 'react'
import {
    MDBCardBody,
    MDBCard,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit'
import LeftProfileBox from '../components/Profile/Boxes/LeftProfileBox/LeftProfileBox';
import SocialMediaBox from '../components/Profile/Boxes/SocialMediaBox/SocialMediaBox';
import CredentialsProfileBox from '../components/Profile/Boxes/CredentialsProfileBox/CredentialsProfileBox';
import ProjectStatusBox from '../components/Profile/Boxes/ProjectStatusBox/ProjectStatus';
import ProfileHeaderBox from '../components/Profile/Boxes/ProfileHeaderBox/ProfileHeaderBox';
import MainNavBar from '../components/navigation/mainNavbar';
import AnalyticsBox from '../components/InvestmentPortfolio/analyticsBox';
import "../stylesheets/css/profile.css"
import investorPortfolio from "../assets/img/investorPortfolio.png"

function ProfilePage() {
    return (
        <div className="Profile">
            <MainNavBar></MainNavBar>
            <section style={{ backgroundColor: "rgb(127,156,196)" }}>
                <MDBContainer className="py-5">
                    <ProfileHeaderBox />  {/*Header of the profile page, gives page links*/}
                    <div id="mdb-row">
                        <div id="mdb-col" lg="4">
                            <LeftProfileBox /> {/*Box that includes profile pic, name, follow and message button, and job + address */}
                            <SocialMediaBox /> {/*Box that includes account name of facebook, twitter, insta, github */}
                        </div>
                        <div>
                            <div id="mdb-row">
                                <div id="mdb-col" lg="8">
                                    <CredentialsProfileBox /> {/*Box that includes full name, email, mobile phone and address */}
                                </div>
                                <div id="mdb-col" lg="8">
                                    <div style={{display:"flex", flexDirection:"column"}} id="investment-portfolio-teaser">
                                        <img style={{width:"300px"}} src={investorPortfolio}></img>
                                        <MDBBtn style={{width:"200px !important0"}} id="goto-investment-portfolio-btn">Investment Portfolio</MDBBtn>
                                    </div>
                                </div>
                            </div>
                            <div style={{width:"100%"}} id="mdb-row">
                                <AnalyticsBox boxPerRow="4"></AnalyticsBox>
                            </div>
                        </div>
                    </div>
                </MDBContainer>
            </section>
        </div>
    )
}

export default ProfilePage