import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCsFquHYw2fA-KUPvSwzjtYoLs4qdx2bYo",
    authDomain: "cloneslack123.firebaseapp.com",
    databaseURL: "https://cloneslack123.firebaseio.com",
    projectId: "cloneslack123",
    storageBucket: "cloneslack123.appspot.com",
    messagingSenderId: "130594524531",
    appId: "1:130594524531:web:ec81e05295647ab8938906",
    measurementId: "G-QB1SD0G9Z8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
