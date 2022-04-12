import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBaFeG3Ku-JkbzBuQ_Z6oQvz5qcjISSEnI",
    authDomain: "u-make-71cd9.firebaseapp.com",
    projectId: "u-make-71cd9",
    storageBucket: "u-make-71cd9.appspot.com",
    messagingSenderId: "61054340806",
    appId: "1:61054340806:web:4270f7d3a7b5860b7bd1c7",
    measurementId: "G-6P3CSFL1DM"
});
export const auth = app.auth();
export default app;