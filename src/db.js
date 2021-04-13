import firebase from "firebase/app";
import "firebase/database";

const config={
    apiKey: "AIzaSyBj9vRk0L-NSexcunFV1SRAPOFE2A0hvgQ",
    authDomain: "jibbbb-f21da.firebaseapp.com",
    databaseURL: "https://jibbbb-f21da-default-rtdb.firebaseio.com",
    projectId: "jibbbb-f21da",
    storageBucket: "jibbbb-f21da.appspot.com",
    messagingSenderId: "798608118465",
    appId: "1:798608118465:web:e62f799efd992b37517a40",
    measurementId: "G-E195MQ9C97"
}
const db = firebase.initializeApp(config);
export default db;