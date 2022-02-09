import React from "react";

import './Styling/SignInPage.css';

import SignInComponent from '../../Components/SignIn/SignInComponent';
import SignUpComponent from '../../Components/SignUp/SignUpComponent';

const SignInPage = () => {
    return (
        <div className="signin-signup-page">
            <SignInComponent />
            <SignUpComponent />
        </div>
    )
}

export default SignInPage;