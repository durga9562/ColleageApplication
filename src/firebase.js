import { initializeApp } from "firebase/app";
import "firebse/database";


const firebaseConfig = {
  apiKey: "AIzaSyDE9cdzLlmuz63i29GprEW6S2Jf3XvHrHs",
  authDomain: "collegeapplication-afd4c.firebaseapp.com",
  databaseURL: "https://collegeapplication-afd4c-default-rtdb.firebaseio.com",
  projectId: "collegeapplication-afd4c",
  storageBucket: "collegeapplication-afd4c.appspot.com",
  messagingSenderId: "124248257981",
  appId: "1:124248257981:web:16bcc327971b967c3e8ed4"
};


const fireDb = initializeApp(firebaseConfig);
export default fireDb.database().ref()