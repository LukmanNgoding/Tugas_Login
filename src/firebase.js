import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDChdMJ30fUAAyIml-eLRSGKKWd2wlWd1c",
  authDomain: "lukmanngoding.firebaseapp.com",
  projectId: "lukmanngoding",
  storageBucket: "lukmanngoding.appspot.com",
  messagingSenderId: "755833898221",
  appId: "1:755833898221:web:2ab8a2ece6d6cb0ab878e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;