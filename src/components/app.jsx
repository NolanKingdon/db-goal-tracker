import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './addGoal';
import GoalList from './goalList';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>
          <h2>Goal Tracker</h2>
          <AddGoal />
          <hr/>
          <h4>Goals</h4>
          <GoalList />
          <hr/>
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
  return {}
}

export default connect(mapStateToProps, null)(App);
