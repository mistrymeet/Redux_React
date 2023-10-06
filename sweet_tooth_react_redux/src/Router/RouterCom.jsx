import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../UI/Pages/Home/HomePage";
import BarsPage from "../UI/Pages/Bars/BarsPage";
import BitesPage from "../UI/Pages/Bites/BitesPage";
import ProtinePage from "../UI/Pages/Protine/ProtinePage";
import GiftBoxesPage from "../UI/Pages/GiftBoxes/GiftBoxesPage";
import BarKits from "../UI/Pages/BarKits/BarKits";
import Cart from "../UI/Pages/Cart/Cart";
import SignIn from "../UI/Pages/SignIn/SignIn";
import Profile from "../UI/Pages/Profile/Profile";
import HeaderCom from "../UI/Components/HeaderCom/HeaderCom";
import { Provider } from "react-redux";
import { authStore } from "../Redux/App/Store";
import Signup from "../UI/Pages/Signup/Signup";
import Dashboard from "../UI/Pages/Dashboard/Dashboard";
import Products from "../UI/Pages/Products/Products";
import Users from "../UI/Pages/Users/Users";
import Orders from "../UI/Pages/Orders/Orders";
import Product from "../Utils/Prodcts.json";

function RouterCom() {
  let [textsearch, setTextSearch] = useState("");
  return (
    <>
      <Provider store={authStore}>
        <BrowserRouter>
          <HeaderCom setTextSearch={setTextSearch} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/bars"
              element={<BarsPage textsearch={textsearch} />}
            />
            <Route path="/bites" element={<BitesPage />} />
            <Route path="/protine" element={<ProtinePage />} />
            <Route path="/gift" element={<GiftBoxesPage />} />
            <Route path="/barkits" element={<BarKits />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default RouterCom;
