import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        <button
          className = "btn btn-danger"
          onClick = {() => this.signOut()}
          >
            Signout
        </button>
      </div>
    )
  }
}

export default App;
