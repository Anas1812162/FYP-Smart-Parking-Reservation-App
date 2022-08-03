import {initializeApp,firebase} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from"firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASH7u2Aq1IhB5YqG4T_HFNlCDFbmvshrI",
  authDomain: "smart-parking-49825.firebaseapp.com",
  projectId: "smart-parking-49825",
  storageBucket: "smart-parking-49825.appspot.com",
  messagingSenderId: "341142370959",
  appId: "1:341142370959:web:330ba0cb06ac5ce8908efa"
  };
  
  const app = initializeApp(firebaseConfig);
 // firebase.initializeApp(firebaseConfig)
  const auth = getAuth();
  const fire = getFirestore();
  const db= getFirestore();
  
 // export default firebase;

  export{
      auth,
      db
      
 }