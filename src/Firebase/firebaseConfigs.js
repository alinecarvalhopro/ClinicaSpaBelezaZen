// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app'
import "@react-native-firebase/auth";
import "@react-native-firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDW17HOopNPxd9RMbR42J1BIoC7sxJcYQ",
  authDomain: "beleza-zen-app.firebaseapp.com",
  databaseURL: "https://beleza-zen-app-default-rtdb.firebaseio.com",
  projectId: "beleza-zen-app",
  storageBucket: "beleza-zen-app.appspot.com",
  messagingSenderId: "564856992194",
  appId: "1:564856992194:web:55d4a7da50237dbd06a65b",
  measurementId: "G-Z8WH4N6Y84"
};

// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;