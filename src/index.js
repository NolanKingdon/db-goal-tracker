import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import App from './components/app';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push("/app");
  } else {
    browserHistory.replace("/signIn");
  }
})

ReactDOM.render(
  <Provider store = { store }>
    <Router path = "/" history = { browserHistory }>
        <Route path = "/app" component = { App } />
        <Route path = "/signin" component = { SignIn } />
        <Route path = "/signup" component = { SignUp } />
    </Router>
  </Provider>, document.getElementById('root')
)
