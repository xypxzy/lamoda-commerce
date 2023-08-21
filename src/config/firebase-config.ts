// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAlbTAXc0sr67CPbO62q6F8TI2XHb0vL38",
  authDomain: "lamoda-baa47.firebaseapp.com",
  projectId: "lamoda-baa47",
  storageBucket: "lamoda-baa47.appspot.com",
  messagingSenderId: "839211592376",
  appId: "1:839211592376:web:4a324bcbdf6eaa6f2b624d",
  measurementId: "G-PZENTXW0JS"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();


export default analytics