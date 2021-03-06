import React from "react";

import './Styling/SignUpComponent.css';

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../Firebase/firebase.utils";

class SignUpComponent extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // Warn user if passwords don't match.
    if (password !== confirmPassword)
    {
        alert('Passwords don\'t match.');
        return;
    }

    try 
    {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, { displayName });

        // Reset form after User is created.
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    }
    catch(error)
    {
        console.error(error);
    }
  }

  handleChange = event => {
      const { name, value } = event.target;

      this.setState({ [name] : value });
  }

  render() 
  {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUpComponent;