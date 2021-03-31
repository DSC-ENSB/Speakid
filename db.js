import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAH4DseBpajlz2DKhKafLjtxIycMqcrCVQ",
  authDomain: "sc2021-291ad.firebaseapp.com",
  projectId: "sc2021-291ad",
  storageBucket: "sc2021-291ad.appspot.com",
  messagingSenderId: "599431318224",
  appId: "1:599431318224:web:a9bf4d27b5185747fe2cd5",
  measurementId: "G-VG2XN9CCK5"
};

const db = firebase.initializeApp(firebaseConfig);
export default db;

