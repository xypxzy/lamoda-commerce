import { auth } from "../config/firebase-config";
import { signInWithPopup, OAuthProvider, linkWithCredential } from "firebase/auth";
import { useState } from "react";
import { AuthCredential } from "firebase/auth/cordova";

const socialMediaAuth =  async(provider: any) => {
  try {
    const authProvider = await signInWithPopup(auth, provider);
    return authProvider.user;

    // const authProvider = await signInWithPopup(auth, provider);

      // const prevUserData = provider.get(user); // Get data of previously authenticated user
      // const currentUserData = provider.get(authProvider.user); 

      // Merge data from both users
      // const mergedData = provider.merge(prevUserData, currentUserData);

      // Link accounts
      // const credential: AuthCredential = OAuthProvider.credentialFromResult(authProvider);
      // await linkWithCredential(user, credential);

      // // Update user data with merged information
      // provider.set(authProvider.user, mergedData);
      

  } catch (error) {
    console.log(error);
  }

  };
  


export default socialMediaAuth;
