import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import About from "../UI/Pages/About/About";
import Contact from "../UI/Pages/Contact/Contact";
import Shop from "../UI/Pages/Shop/Shop";
import Signin from "../UI/Pages/Signin/Signin";
import Signup from "../UI/Pages/Signup/Signup";
import Profile from "../UI/Pages/Profile/Profile";
import Cart from "../UI/Pages/Cart/Cart";
import Products from "../UI/Pages/Admin/Products/Products";
import Users from "../UI/Pages/Admin/Users/Users";
import Orders from "../UI/Pages/Admin/Orders/Orders";
import HeaderCom from "../UI/Components/HeaderCom/HeaderCom";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <HeaderCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
