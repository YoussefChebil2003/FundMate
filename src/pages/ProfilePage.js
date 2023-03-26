import React from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
} from 'mdb-react-ui-kit'
import LeftProfileBox from '../components/Profile/Boxes/LeftProfileBox/LeftProfileBox';
import SocialMediaBox from '../components/Profile/Boxes/SocialMediaBox/SocialMediaBox';
import CredentialsProfileBox from '../components/Profile/Boxes/CredentialsProfileBox/CredentialsProfileBox';
import ProjectStatusBox from '../components/Profile/Boxes/ProjectStatusBox/ProjectStatus';
import ProfileHeaderBox from '../components/Profile/Boxes/ProfileHeaderBox/ProfileHeaderBox';


function ProfilePage() {
    return (
        <div className="App">
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5">
                    <ProfileHeaderBox />  {/*Header of the profile page, gives page links*/}
                    <MDBRow>
                        <MDBCol lg="4">
                            <LeftProfileBox /> {/*Box that includes profile pic, name, follow and message button, and job + address */}
                            <SocialMediaBox /> {/*Box that includes account name of facebook, twitter, insta, github */}
                        </MDBCol>
                        <MDBCol lg="8">
                            <CredentialsProfileBox /> {/*Box that includes full name, email, mobile phone and address */}
                            <MDBRow>
                                <ProjectStatusBox /> {/*Box that includes project status of assignments */}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    )
}

export default ProfilePage