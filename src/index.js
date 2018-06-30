import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { firebaseApp } from './firebase';

import App from './components/app';
import SignUp from './components/signUp';
import SignIn from './components/signIn';


firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log("User signed in or up: ", user);
  } else {
    console.log("Signout/No signin");
  }
})
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path = "/app" component = {App} />
      <Route path = "/signin" component = {SignIn} />
      <Route path = "/signup" component = {SignUp} />
    </div>
  </BrowserRouter>, document.getElementById('root')
)
