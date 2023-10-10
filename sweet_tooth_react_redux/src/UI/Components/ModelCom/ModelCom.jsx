import React from "react";
import "../ModelCom/Model.css";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function ModelCom() {
  return (
    <>
      <div className="model mb-36">
        <Container>
          <div className="backg">
            <div className="modelinfo drop-shadow-lg text-black text-justify">
              <h5 className="font-semibold tracking-wider text-xl">
                eau de toilette
              </h5>
              <h1 className="text-5xl m-0 ">perfume</h1>
              <h1 className="text-5xl m-0">reflective</h1>
              <h1 className="text-5xl mb-2">edition</h1>
              <div className="para text-xl font-extrabold pb-3">
                <p className="text-white drop-shadow-lg">
                  This floral-fresh-ambery fragrance in 6 facets reveals itself
                  in a unique way on every woman. Because each woman has her own
                  special allure.
                </p>
              </div>
              <Link to="/">
                <Button color="dark">Shop now</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ModelCom;
