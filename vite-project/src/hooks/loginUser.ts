import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../services/firebaseConfig"

const loginUser = async (email : string , password : string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error : any) {
    console.error('Error logging in user:', error.message);
  }
};

export default loginUser;