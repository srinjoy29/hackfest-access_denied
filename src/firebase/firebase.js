import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi5d1YiEJPbjqfb2JxoIqwiXKCtvJw9WI",
  authDomain: "code-fusion-8ea94.firebaseapp.com",
  projectId: "code-fusion-8ea94",
  storageBucket: "code-fusion-8ea94.appspot.com",
  messagingSenderId: "880765636938",
  appId: "1:880765636938:web:ec3891fcd11361888771b3",
  measurementId: "G-37YM4MJQWT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
