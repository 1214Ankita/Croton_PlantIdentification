import * as firebase from "firebase/app";

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

export async function loginUser(username: string, password: string) {
  // ...
}
