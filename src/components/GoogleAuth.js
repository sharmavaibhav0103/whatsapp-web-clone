import React from "react";
import { auth } from "../config/firebase";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "./store";

function GoogleSignUpButton() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        navigate("/user");
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  };

  return (
    <button onClick={signInWithGoogle} className="login-with-google-btn">
      Sign Up with Google
    </button>
  );
}

export default GoogleSignUpButton;
