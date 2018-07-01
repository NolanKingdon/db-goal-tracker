import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './addGoal';
import GoalList from './goalList';
import CompletedGoals from './completeGoalList'

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
        <h4>Complete Goals</h4>
        <CompletedGoals />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);
