// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyDSRcRPHChGh9sRpoYkYEzo8Yt3Jcfx7KM",

  authDomain: "gowebsite-4736b.firebaseapp.com",

  projectId: "gowebsite-4736b",

  storageBucket: "gowebsite-4736b.appspot.com",

  messagingSenderId: "658123635889",

  appId: "1:658123635889:web:afadb845824c1e5b6db690",

  measurementId: "G-MJ6P1WWXSR"

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { auth, analytics };
