import { COMPLETE_GOALS } from '../constants/..constants.js';

export default (state = [], action) => {
  switch(action.type){
    case COMPLETE_GOALS:
      const { completedGoals } = action;
      return completedGoals;
    default:
      return state;
  }
}
