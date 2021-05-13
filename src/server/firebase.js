import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5POmiwlcy7DPuHHlZCboULunuPoM56Co",
  authDomain: "reportapp-36c50.firebaseapp.com",
  projectId: "reportapp-36c50",
  storageBucket: "reportapp-36c50.appspot.com",
  messagingSenderId: "847981148418",
  appId: "1:847981148418:web:adc7be4847ea6df5676a1b",
  measurementId: "G-KHEW1HEZGB",
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
