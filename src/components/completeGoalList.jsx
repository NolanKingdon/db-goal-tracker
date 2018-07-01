import React, { Component } from 'react';
import { completedGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { completeGoals } from '../actions';

class CompletedGoals extends Component {
  componentDidMount() {
    completedGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completedGoal => {
        const { email, title } = completedGoal.val();
        completeGoals.push({email, title});
        this.props.completeGoals(completeGoals);
      })

    })
  }

  render(){
    return(
      <div>
        {
          this.props.completedGoals.map((completedGoal, index) => {
            const { title, email } = completedGoal;
            return(
              <div key = {index}>
                {title}, {email}
              </div>
            )
          })
        }
      </div>
    )
  }

}

function mapStateToProps(state) {
  const {completedGoals } = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, { completeGoals })(CompletedGoals);
