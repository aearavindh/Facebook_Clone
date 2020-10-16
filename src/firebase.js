import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzuslzOBsJ8KXgQmF7_af_3yRl1MYG0d8",
    authDomain: "facebook-clone-c4998.firebaseapp.com",
    databaseURL: "https://facebook-clone-c4998.firebaseio.com",
    projectId: "facebook-clone-c4998",
    storageBucket: "facebook-clone-c4998.appspot.com",
    messagingSenderId: "110903893418",
    appId: "1:110903893418:web:7ab80e70b3d23771895fd3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;