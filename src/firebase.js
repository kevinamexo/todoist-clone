import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig= firebase.initalizeApp({
    apiKey: "AIzaSyD-UEMHNO38XFoCLtLb6WQ1YT2IQhPt-N0",
    authDomain: "todoist-clone-203df.firebaseapp.com",
    databaseURL: "https://todoist-clone-203df-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-203df",
    storageBucket: "todoist-clone-203df.appspot.com",
    messagingSenderId: "103522568649",
    appId: "1:103522568649:web:63c033d0d1decd36c18018"

})


export {firebaseConfig as firebase}