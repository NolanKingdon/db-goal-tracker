import { SIGNED_IN, SET_GOALS, COMPLETE_GOALS } from '../constants/constants.js';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function completeGoals(completed_goals) {
  const action = {
    type: COMPLETE_GOALS,
    completed_goals
  }
  return action;
}
