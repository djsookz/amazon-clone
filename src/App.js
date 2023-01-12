import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import Testt from "./pages/Testt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/Checkout" element={<Checkout />}></Route>
      <Route path="/Test" element={<Testt />}></Route>
    </Routes>
  );
}

export default App;
