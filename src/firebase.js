import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpaEQESTs-UThJ4kFxe83ew0PCbIWVVHw",
  authDomain: "mo-clone.firebaseapp.com",
  databaseURL: "https://mo-clone.firebaseio.com",
  projectId: "mo-clone",
  storageBucket: "mo-clone.appspot.com",
  messagingSenderId: "855763344656",
  appId: "1:855763344656:web:736fb939a50298edca9995",
  measurementId: "G-90LX8KP3CX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };