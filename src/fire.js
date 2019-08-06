import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDE2ZDsH6VzEdCB25zG0YeAh6eHkYW1R5k",
  authDomain: "react-chat-53c8c.firebaseapp.com",
  databaseURL: "https://react-chat-53c8c.firebaseio.com",
  storageBucket: "react-chat-53c8c.appspot.com",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;