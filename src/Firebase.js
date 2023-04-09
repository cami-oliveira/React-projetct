import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXke8T24XtOvIZB51CwMYq7dSN6UD_r6g",
    authDomain: "projetoreact-cc400.firebaseapp.com",
    projectId: "projetoreact-cc400",
    storageBucket: "projetoreact-cc400.appspot.com",
    messagingSenderId: "1002940537465",
    appId: "1:1002940537465:web:951d3e943790510a9512a8"
};

if (firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase;