import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebasee";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Testt = () => {
  const [user] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={GoogleLogin}>Sign in</button>
      <button onClick={() => auth.signOut()}>sign out</button>
      {!user && <Link to="/" />}
      {user && <p>Welcome {user.displayName}</p>}
    </div>
  );
};

export default Testt;
