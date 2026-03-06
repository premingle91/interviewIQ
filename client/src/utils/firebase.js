import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-6f44d.firebaseapp.com",
  projectId: "interviewiq-6f44d",
  storageBucket: "interviewiq-6f44d.firebasestorage.app",
  messagingSenderId: "684865966502",
  appId: "1:684865966502:web:6694f223ff0e5103c23f67",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
