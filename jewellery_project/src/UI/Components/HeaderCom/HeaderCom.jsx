import Search from "antd/es/input/Search";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  InputGroup,
  Input,
} from "reactstrap";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./HeaderCom.css";

function HeaderCom() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand={"lg"} container={"sm"}>
        <NavbarBrand href="/">
          <div className="flex flex-col items-center">
            <img src="/images/logo.png" alt="" height={"40px"} width={"40px"} />
            <p>Kalyan Jewellers</p>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto justify-center items-center flex-1 gap-2"
            navbar
          >
            <NavItem>
              <NavLink to={"/"}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/shop"}>Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/about"}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/contact"}>Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav className="flex justify-center items-center flex-1 gap-4 text-lg me-auto">
            <NavItem>
              <InputGroup>
                <Input />
                <Button className="bg-black">
                  <FiSearch />
                </Button>
              </InputGroup>
            </NavItem>
            <NavItem>
              <NavLink to={"/"}>
                <FiHeart />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/cart"}>
                <FiShoppingCart />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/signin"}>Signin</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
