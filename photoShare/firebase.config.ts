import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABl5Xj98qGqSlCcQtpSZifIN2B8IIi2nw",
  authDomain: "photoshare-bb061.firebaseapp.com",
  projectId: "photoshare-bb061",
  storageBucket: "photoshare-bb061.firebasestorage.app",
  messagingSenderId: "902955862092",
  appId: "1:902955862092:web:4312f1134669cb182ccce9",
  measurementId: "G-YN9WEWXKR0"
};

export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_db = getFirestore(firebase_app);

// const analytics = getAnalytics(firebase_app);