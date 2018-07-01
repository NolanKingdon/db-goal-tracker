import React, { Component } from 'react';
import { completedGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {

  completedGoal(){
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completedGoalRef.push({email, title});
  }

  deleteGoal() {
    const { title, serverKey } = this.props.goal
    goalRef.child(serverKey).remove();
  }

  render(){
    const { email, title } = this.props.goal;
    return(
      <div style = {{margin: 5, backgroundColor: "#CCC", borderRadius: 5}}>
        <h3>{ title }</h3>
        <p><em>Submitted by { email }</em></p>
        <button
          className = "btn btn-sm btn-primary"
          onClick = {() => this.completedGoal()}
        >
          Completed
        </button>
        <button
          className = "btn btn-sm btn-danger"
          onClick = {() => this.deleteGoal()}
        >
          Remove
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
