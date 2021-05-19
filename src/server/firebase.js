import firebase from "firebase";
import dotenv from 'dotenv';


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  if (!/already exists/.test(e.message)) {
    console.error("Firebase initialization error", e.stack);
  }
}

const fire = firebase;
export default fire;
