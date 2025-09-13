import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD-tr2pwJAb6yTnvqFhHDCAR9LXAcIB35s",
  authDomain: "netflixy-ac3fc.firebaseapp.com",
  projectId: "netflixy-ac3fc",
  storageBucket: "netflixy-ac3fc.firebasestorage.app",
  messagingSenderId: "170463143010",
  appId: "1:170463143010:web:1c689843a5c59d67421d3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db= getFirestore(app);

const signup=async (name,email,password)=>{
    try{
       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user= res.user
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }

}

const login=async(email,password)=>{
    try{
         await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
 
}
const logout=()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout};