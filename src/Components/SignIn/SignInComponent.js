import React from "react";

import './Styling/SignInComponent.css';

import FormInput from '../FormInput/FormInput';
import CustomButton from "../CustomButton/CustomButton";

import { signInWithGoogle } from "../../Firebase/firebase.utils";

class SignInComponent extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Prevents the default action of the form making a POST request
    // and resets the state values.
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }


    render()
    {
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
              <CustomButton type="submit">Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
            </form>
          </div>
        )
    }
}

export default SignInComponent;