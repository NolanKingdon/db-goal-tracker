import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './addGoal';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>
          <h2>Goals</h2>
          <AddGoal />
          <div>Goal List</div>

        </div>
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

function mapStateToProps(state) {
  console.log('state, ', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
