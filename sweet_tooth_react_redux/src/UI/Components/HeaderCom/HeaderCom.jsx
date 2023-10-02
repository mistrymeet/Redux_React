import React, { useState } from "react";
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
import { useSelector } from "react-redux";

function HeaderCom() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const Auth = useSelector((state) => {
    return state.AUTH.user;
  });

  return (
    <div>
      <Navbar expand={"lg"} container={"sm"} className="flex gap-3" fixed="top">
        <NavbarBrand href="">
          <NavLink to={"/"}>
            <img src="/logo.png" alt="" width={"80px"} height={"80px"} />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto text-sm font-bold justify-center gap-4"
            navbar
            style={{ flex: 2 }}
          >
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
              <NavLink to={"/edition"}>Limited Editions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"barkits"}>Bar Kits</NavLink>
            </NavItem>
          </Nav>
          <Nav
            style={{ flex: 1.4 }}
            className="flex items-center gap-4 text-3xl justify-end"
          >
            <div className="w-60">
              <InputGroup>
                <Input placeholder="username" />
                <InputGroupText className="bg-black text-white">
                  <CgSearch />
                </InputGroupText>
              </InputGroup>
            </div>
            <NavItem>
              <NavLink to={"/cart"}>
                <GiShoppingCart />
              </NavLink>
            </NavItem>
            {Auth ? (
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
