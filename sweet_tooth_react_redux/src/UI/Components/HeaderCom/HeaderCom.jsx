import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";
import { CgSearch } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { LuUserCircle } from "react-icons/lu";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import {
  getAllCart,
  getCart,
} from "../../../Redux/Features/CartSlice/CartSlice";
import { searchInput } from "../../../Redux/Features/SearchSlice/SearchSlice";

function HeaderCom({ setTextSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const auth = useSelector((state) => {
    return state?.authReducer?.user;
  });

  const adminAuth = useSelector((state) => {
    return state?.authReducer?.user?.userType === "admin";
  });

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state?.cartReducer);

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

  useEffect(() => {
    dispatch(searchInput(search));
  }, [search]);

  return (
    <div>
      <Navbar
        expand={"lg"}
        container={"sm"}
        className="navigation flex backdrop-blur-sm"
        fixed="top"
      >
        <NavbarBrand href="">
          <NavLink to={"/"}>
            <img src="/logo.png" alt="" width={"80px"} height={"80px"} />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto text-sm items-center font-bold justify-center gap-4"
            navbar
            style={{ flex: 1.8 }}
          >
            {adminAuth ? (
              <>
                <NavItem>
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/dashboard/products"}>Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/dashboard/users"}>Users</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/dashboard/orders"}>Orders</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/dashboard/analytics"}>Analytics</NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink to={"/bars"}>Bars</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/bites"}>Bites</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/protine"}>Protine</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/gift"}>Gift Boxes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/about"}>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
          <Nav
            style={{ flex: 1.6 }}
            className="scont flex items-center gap-4 text-3xl justify-center"
          >
            <div className="w-60">
              <InputGroup>
                <Input
                  placeholder="search here"
                  onChange={(e) => setSearch(e?.target?.value)}
                />
                <InputGroupText className="bg-black text-white">
                  <CgSearch />
                </InputGroupText>
              </InputGroup>
            </div>
            <NavItem>
              <NavLink to={"/wishlist"}>
                <AiOutlineHeart />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/cart"}>
                <span className="relative">
                  <GiShoppingCart />
                  <span
                    className="text-sm absolute text-black"
                    style={{ top: "-8px", right: "-5px" }}
                  >
                    {cart?.length}
                  </span>
                </span>
              </NavLink>
            </NavItem>
            {JSON.stringify(auth) !== "{}" ? (
              <NavItem>
                <NavLink to={"/profile"}>
                  <LuUserCircle />
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink to={"/signin"}>
                  <span className="text-sm font-bold flex items-center">
                    Sign In
                  </span>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
