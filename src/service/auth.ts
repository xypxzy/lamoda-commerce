import { auth } from "../config/firebase-config"
import { signInWithPopup } from "firebase/auth"

const socialMediaAuth = async(provider) => {
    try {
        const authProvider = await signInWithPopup(auth, provider)
        return authProvider.user

    } catch (error) {
        console.log(error)
    }
}   

export default socialMediaAuth