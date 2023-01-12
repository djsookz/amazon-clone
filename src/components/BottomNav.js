import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bnav ">
      <p className="bnav__p link">
        <AiOutlineMenu className="bnav__menu" />
        All
      </p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link hidden">Electronics</p>
      <p className="link hidden">Food & Grocery</p>
      <p className="link hidden">Prime</p>
      <p className="link hidden">Buy Again</p>
      <p className="link hidden">Shopper Toolkit</p>
      <p className="link hidden">Health & Personal</p>
    </div>
  );
};

export default BottomNav;
