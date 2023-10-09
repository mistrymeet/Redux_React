import React from "react";
const { Footer } = Layout;
import { Layout } from "antd";
import { Col, Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

function FooterCom() {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          background: "saddlebrown",
          padding: "30px",
          color: "white",
        }}
      >
        <Container>
          <Row className="gap-10 pb-10 text-white">
            <Col className="flex-1 text-left">
              <Link to="/" className="text-white no-underline">
                <span className="text-3xl uppercase tracking-wider font-semibold">
                  sweet tooth
                </span>
                <p className="text-xs font-medium tracking-widest uppercase pb-3">
                  Chocolate paradise
                </p>
              </Link>
              <p className="text-justify font-normal tracking-wide">
                At Sweet Tooth we create responsible and fair gourmet chocolate
                in exclusive quality with only the best natural ingredients.
                Nothing else. We have a luxurious selection of gift boxes and
                chocolate boxes for any special occasion, holidays like Diwali
                and Raksha Bandhan etc.
              </p>
            </Col>
            <Col className="flex-1 text-left tracking-wide">
              <p className="uppercase text-base font-medium pb-3 ">
                Customer care
              </p>
              <p className=" pb-3 font-normal">
                Need help? We're always here for you and ready to help.
              </p>
              <p className="font-normal m-0 ">
                Email :{" "}
                <a href="" className="no-underline text-white">
                  sweettooth@gmail.com
                </a>
              </p>
              <p className="ffont-normal m-0">
                Mobile :{" "}
                <a href="" className="no-underline text-white">
                  8849522105
                </a>
              </p>
              <p className="font-normal m-0">
                Address :{" "}
                <a href="" className="no-underline text-white">
                  110, laxuria buisness hub, vesu, surat.
                </a>
              </p>
            </Col>
            <Col className="text-left tracking-wide" style={{ flex: "0.5" }}>
              <p className="uppercase text-base font-medium pb-3 ">Follow Us</p>
              <ol className="font-normal p-0 ">
                <li>
                  <a href="#" className="no-underline text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    Twitter
                  </a>
                </li>
              </ol>
            </Col>
            <Col className="text-left tracking-wide" style={{ flex: "0.5" }}>
              <p className="uppercase text-base font-medium pb-3 ">
                useful links
              </p>
              <ol className="p-0 font-normal">
                <li>
                  <NavLink to="/bars" className="no-underline text-white">
                    Bars
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bites" className="no-underline text-white">
                    Bites
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/protine" className="text-white no-underline">
                    Protine
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gift" className="text-white no-underline">
                    Gift Boxes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/barkits" className="text-white no-underline">
                    Bar Kits
                  </NavLink>
                </li>
              </ol>
            </Col>
            <hr />
            <p className="text-center text-white m-0">
              Copyright © 2023 Innesa Perfumes | Powered by Innesa Perfumes
            </p>
          </Row>
        </Container>
      </Footer>
    </>
  );
}

export default FooterCom;
