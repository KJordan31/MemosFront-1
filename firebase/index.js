import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPIExi1tgSKFNWv2Mu7dw4tJ83qSDOgoA",
  authDomain: "memos-95b52.firebaseapp.com",
  projectId: "memos-95b52",
  storageBucket: "memos-95b52.appspot.com",
  messagingSenderId: "898457084980",
  appId: "1:898457084980:web:960faefd50de9574c21661",
  measurementId: "G-9GBE4XT7RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }