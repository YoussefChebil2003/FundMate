import MainNavBar from '../components/navigation/mainNavbar';
import SignUp from '../components/user-registration/sign up/signUp';
import '../stylesheets/css/signup-page.css'
import React from 'react';

function signUpPage() {
    return (
        <div className='sign-up-page'>
            <MainNavBar/>
            <SignUp></SignUp>
        </div>
        
    );
}

export default signUpPage;
