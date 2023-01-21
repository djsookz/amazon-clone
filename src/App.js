import "./App.css";
import { Routes, Route } from "react-router-dom";
import { auth } from "./utils/firebasee";
import { useAuthState } from "react-firebase-hooks/auth";

import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import Testt from "./pages/Testt";
import SingIn from "./pages/SingIn";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <SingIn />}></Route>

      <Route
        path="/Checkout"
        element={user ? <Checkout /> : <SingIn />}
      ></Route>
      <Route path="/Test" element={<Testt />}></Route>
      <Route path="/singin" element={<SingIn />}></Route>
    </Routes>
  );
}

export default App;
