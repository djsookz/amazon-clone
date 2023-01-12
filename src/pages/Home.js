import React from "react";
import "./Home.css";

import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Products from "../components/Products";
import Banner from "../components/Banner";
import BottomNav from "../components/BottomNav";

const home = () => {
  return (
    <div>
      <Header />
      <BottomNav />
      <div className="home">
        <Banner />

        <Products />
      </div>
    </div>
  );
};

export default home;
