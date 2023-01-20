import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDU-pGcZN-jgCt7tNw0jRj6oFq0ZMDyJtw",
  authDomain: "shopy-cb733.firebaseapp.com",
  projectId: "shopy-cb733",
  storageBucket: "shopy-cb733.appspot.com",
  messagingSenderId: "21996522351",
  appId: "1:21996522351:web:d8e936d8023516e24cb69a"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt :"select_account"
});
export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider)




export const db =getFirestore();
export const creatUserDocumentfromAuth=async (userAuth) =>{
  const userDocRef =doc(db, 'users', userAuth.uid)
  console.log(userDocRef);

  const userSnapshot= await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,{displayName,email,createdAt});
    }
    catch(error){console.log('error',error.message) }
  
  }
return(userDocRef)




}