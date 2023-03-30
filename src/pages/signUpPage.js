import MainNavBar from '../components/navigation/mainNavbar';
import SignUp from '../components/user-registration/sign up/signUp';
import '../stylesheets/css/signup-page.css'
import React from 'react';
import bubbles from "../assets/img/3d-bubbles.png"
import bubbleswhite from "../assets/img/3d-bubbleswhite.png"

function signUpPage() {
    return (
        <>
            <MainNavBar/>
            <div className='sign-up-page'>
                <SignUp></SignUp>
            </div>
        </>
        
        
    );
}

export default signUpPage;
