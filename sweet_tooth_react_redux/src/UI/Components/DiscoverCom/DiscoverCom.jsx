import { Button, Col, Row } from "reactstrap";
import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./Discover.css";

function DiscoverCom() {
  return (
    <>
      <div className="discover mt-6 mb-20">
        <Container>
          <Row className="gap-3 sm:flex-col">
            <Col className="grid" style={{ flex: "2" }}>
              <div className="d-flex justify-center items-center gap-3">
                <img className="dimg1" />
                <img className="dimg2" />
              </div>
              <div className="grid-flow-col text-center text">
                <hr className="w-80 m-auto p-0 my-4" />
                <h1 className="w-50 m-auto" data-aos="flip-up">
                  the new fragrance that will surprise you every day
                </h1>
                <Link to="/">
                  <Button color="dark" className="mt-3">
                    Discover
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DiscoverCom;
