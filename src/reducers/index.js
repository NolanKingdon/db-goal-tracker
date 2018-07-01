import { combineReducers } from 'redux';
import user from './reducerUser';
import goals from './reducerGoals';
import completedGoals from './reducerGoals';

export default combineReducers({
  user,
  goals,
  completedGoals
});
