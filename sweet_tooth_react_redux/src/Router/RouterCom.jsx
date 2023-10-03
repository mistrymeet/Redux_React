import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../UI/Pages/Home/HomePage";
import BarsPage from "../UI/Pages/Bars/BarsPage";
import BitesPage from "../UI/Pages/Bites/BitesPage";
import ProtinePage from "../UI/Pages/Protine/ProtinePage";
import GiftBoxesPage from "../UI/Pages/GiftBoxes/GiftBoxesPage";
import LimitedEdition from "../UI/Pages/LimitedEdition/LimitedEdition";
import BarKits from "../UI/Pages/BarKits/BarKits";
import Cart from "../UI/Pages/Cart/Cart";
import SignIn from "../UI/Pages/SignIn/SignIn";
import Profile from "../UI/Pages/Profile/Profile";
import HeaderCom from "../UI/Components/HeaderCom/HeaderCom";
import { Provider } from "react-redux";
import { authStore } from "../Redux/App/Store";
import Signup from "../UI/Pages/Signup/Signup";
import Dashboard from "../UI/Pages/Dashboard/Dashboard";

function RouterCom() {
  return (
    <>
      <Provider store={authStore}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bars" element={<BarsPage />} />
            <Route path="/bites" element={<BitesPage />} />
            <Route path="/protine" element={<ProtinePage />} />
            <Route path="/gift" element={<GiftBoxesPage />} />
            <Route path="/edition" element={<LimitedEdition />} />
            <Route path="/barkits" element={<BarKits />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default RouterCom;
