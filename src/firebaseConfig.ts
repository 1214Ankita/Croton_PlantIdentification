import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyD92zY10w6i4CTmc5prHUE1WF6BD9lhGwc",
  authDomain: "crotonpi.firebaseapp.com",
  databaseURL:
    "https://crotonpi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crotonpi",
  storageBucket: "crotonpi.appspot.com",
  messagingSenderId: "364753013624",
  appId: "1:364753013624:web:350b0e3758350b11c9968d",
  measurementId: "G-KRG1HJQYSV",
};

firebase.initializeApp(config);

export function getCurrentUser(){
    return new Promise((resolve, reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
            if (user){ resolve(user) }
            else{ resolve(null) }
            unsubscribe()
        })
    })
}

export async function loginUser(username: string, password: string) {
    const email = `${username}@croton.com`
    try{
        const res=await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return res
    }
    catch(error){
        console.log(error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@croton.com`
    try{
        const res=await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    }
    catch(error){
        console.log(error)
        return false
    }
}

export function logoutuser(){
    return firebase.auth().signOut()
}