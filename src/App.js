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
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';


class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.state = {
      currentUser : null
    }
  }

  ////// Member Variables //////
  unsubscribeFromAuth = null;


  ////// Lifecycle Methods ///////
  componentDidMount()
  {
    // Sets up the firebase 'subscription'.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObject => {
      if (userAuthObject)
      {
        const userRef = await createUserProfileDocument(userAuthObject);

        userRef.onSnapshot(snapshotObject => {
          this.setState(
            {
              currentUser : {
                id : snapshotObject.id,
                ...snapshotObject.data()
              }
            }
          );
        });
      }
      else 
      {
        this.setState({currentUser : userAuthObject});
      }
    });
  }

  componentWillUnmount()
  {
    // Closes the firebase subscription.
    this.unsubscribeFromAuth();
  }


  ////// Main Render //////
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