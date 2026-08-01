import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

sendPasswordResetEmail,

signOut,

GoogleAuthProvider,

signInWithPopup

} from "firebase/auth";

import { auth } from "../firebase/firebase";

const googleProvider=new GoogleAuthProvider();

export const register=(email:string,password:string)=>{

return createUserWithEmailAndPassword(

auth,

email,

password

);

};

export const login=(email:string,password:string)=>{

return signInWithEmailAndPassword(

auth,

email,

password

);

};

export const googleLogin=()=>{

return signInWithPopup(

auth,

googleProvider

);

};

export const forgotPassword=(email:string)=>{

return sendPasswordResetEmail(

auth,

email

);

};

export const logout=()=>{

return signOut(auth);

};
