import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { firebaseApp } from './firebase';

import App from './components/app';
import SignUp from './components/signUp';
import SignIn from './components/signIn';


firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    browserHistory.push("/app");
  } else {
    browserHistory.replace("/signIn");
  }
})

ReactDOM.render(
  <Router path = "/" history = { browserHistory }>
      <Route path = "/app" component = {App} />
      <Route path = "/signin" component = {SignIn} />
      <Route path = "/signup" component = {SignUp} />
  </Router>, document.getElementById('root')
)
