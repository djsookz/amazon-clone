import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebasee";

import { Link } from "react-router-dom";
import "./SingIn.css";

const SingIn = () => {
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singIn">
      <div className="singIn-wrapper">
        <h1 className="singIn_text">Welcome to Amazon Clone</h1>
        <p>Please Sing in</p>
        <div>
          <Link to="/" onClick={GoogleLogin}>
            <button className="singIn-Button">Sing In with Google</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
