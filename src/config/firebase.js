// src/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgaJXrGceBtCY1sLu6JX51eehpIHXoJf0",
  authDomain: "whatsapp-web-clone-398606.firebaseapp.com",
  projectId: "whatsapp-web-clone-398606",
  storageBucket: "whatsapp-web-clone-398606.appspot.com",
  messagingSenderId: "802403558591",
  appId: "1:802403558591:web:ed546f03ec86a2c9af520a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
