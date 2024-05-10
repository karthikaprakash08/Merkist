// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSyxNZ6hacTLhBQyWsI4VRKbfE8inV7wI",
  authDomain: "merkist-a8b8b.firebaseapp.com",
  databaseURL: "https://merkist-a8b8b-default-rtdb.firebaseio.com",
  projectId: "merkist-a8b8b",
  storageBucket: "merkist-a8b8b.appspot.com",
  messagingSenderId: "1022677190281",
  appId: "1:1022677190281:web:7b182d812c93e9b705e858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app