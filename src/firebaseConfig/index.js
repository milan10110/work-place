// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArOG9lNZYI2Vw_bq5ksjMV6aR3E0VsII",
  authDomain: "work-place-b78fd.firebaseapp.com",
  projectId: "work-place-b78fd",
  storageBucket: "work-place-b78fd.appspot.com",
  messagingSenderId: "803102740517",
  appId: "1:803102740517:web:21db36c96d76ed8f5cefcc",
  measurementId: "G-X5465XNP0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
