import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCzSXYmYUcwWza778feHx-eiMFTVEzzxr4",
  authDomain: "goal-tracker-f13a8.firebaseapp.com",
  databaseURL: "https://goal-tracker-f13a8.firebaseio.com/",
  projectId: "goal-tracker-f13a8",
  storageBucket: "",
  messagingSenderId: "410168981964"
}



export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completedGoals');
