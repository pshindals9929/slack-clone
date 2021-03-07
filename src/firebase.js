import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "slack-clone-aee2f.firebaseapp.com",
  databaseURL: "https://slack-clone-aee2f.firebaseio.com",
  projectId: "slack-clone-aee2f",
  storageBucket: "slack-clone-aee2f.appspot.com",
  messagingSenderId: "590316624745",
  appId: "1:590316624745:web:d804c79824f39b718bfbf8",
  measurementId: "G-TE52F77GPH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
