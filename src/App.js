import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styling
import './App.css';

// Header Import
import Header from './Components/Header/Header';

// Page Imports
import HomePage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInPage from './Pages/SignInPage/SignInPage';

// Authentication
import { auth } from './Firebase/firebase.utils';


// Main App
class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.state = {
      currentUser : null
    }
  }

  // Member Variables
  unsubscribeFromAuth = null;

  // Lifecycle Methods
  componentDidMount()
  {
    // Sets up the firebase 'subscription'.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user });
    });
  }

  componentWillUnmount()
  {
    // Closes the firebase subscription.
    this.unsubscribeFromAuth();
  }

  // Main Render 
  render()
  {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;