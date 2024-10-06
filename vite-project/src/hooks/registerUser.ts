
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../services/firebaseConfig"

const registerUser = async (email : string , password : string ) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user);
  } catch (error : any) {
    console.error('Error registering user:', error.message);
  }
};

export default registerUser;
