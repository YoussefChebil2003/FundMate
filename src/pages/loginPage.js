import MainNavBar from '../components/navigation/mainNavbar';
import Login from '../components/user-registration/login/login'
import '../stylesheets/css/signup-page.css'
import React from 'react';
import bubbles from "../assets/img/3d-bubbles.png"
import bubbleswhite from "../assets/img/3d-bubbleswhite.png"

function signUpPage() {
    return (
        <>
            <MainNavBar/>
            <div className='sign-up-page'>
                <Login></Login>
            </div>
        </>
        
        
    );
}

export default signUpPage;
