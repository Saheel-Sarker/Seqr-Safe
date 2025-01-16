// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKbo3ziT5qiLGh-JXWQmzOsnwrfWdZ9cM",
  authDomain: "keepr-caab4.firebaseapp.com",
  projectId: "keepr-caab4",
  storageBucket: "keepr-caab4.firebasestorage.app",
  messagingSenderId: "1079999495062",
  appId: "1:1079999495062:web:61320f8969c700da4b3bb7",
  measurementId: "G-CN9E5Z9BC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
