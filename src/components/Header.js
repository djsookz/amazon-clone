import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoBasketSharp } from "react-icons/io5";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebasee";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <BsSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <IoBasketSharp className="header__basketIcon" />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            {!user && (
              <div>
                <div className="header__optionLineOne">Hello </div>
                <span onClick={GoogleLogin} className="header__optionLineTwo">
                  Sign in
                </span>
              </div>
            )}
            {user && (
              <div className="header__user">
                <p className="header__optionLineOne">{user.displayName}</p>
                <span
                  onClick={() => auth.signOut()}
                  className="header__optionLineTwo"
                >
                  Sign out
                </span>
              </div>
            )}
          </div>
        </Link>
        {user && <img className="header__user__img" src={user.photoURL} />}
        {loading && <p>loading...</p>}
      </div>
    </nav>
  );
};

export default Header;
