import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxienDMsK-bwMRwHzfDw2_BMIpHzLAQOg",
  authDomain: "uniflux-88e3f.firebaseapp.com",
  projectId: "uniflux-88e3f",
  storageBucket: "uniflux-88e3f.appspot.com",
  messagingSenderId: "316215558398",
  appId: "1:316215558398:web:1d1059a45f1fd5934ca5af",
  measurementId: "G-DHXNMQRG0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const database = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
//const storage = getStorage(app);
//auth.setPersistence('local');
export {app, auth, googleProvider };