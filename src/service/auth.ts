import { auth } from "../config/firebase-config";
import { signInWithPopup, OAuthProvider, linkWithCredential } from "firebase/auth";
import { useState } from "react";
import { AuthCredential } from "firebase/auth/cordova";

const socialMediaAuth =  async(provider: any) => {
  try {
    const authProvider = await signInWithPopup(auth, provider);
    return authProvider.user;
    
  } catch (error) {
    console.log(error);
  }

  };
  


export default socialMediaAuth;
