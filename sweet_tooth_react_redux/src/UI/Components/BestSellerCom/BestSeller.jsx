import React, { useEffect, useState } from "react";
import Product from "../../../Utils/Product.json";
import CardCom from "../CardCom/CardCom";
import { Container } from "reactstrap";
import "./BestSeller.css";

function BestSeller() {
  let [data, setData] = useState([]);
  useEffect(() => {
    let filterData = Product?.sort?.((a, b) => {
      return b.bestseller - a.bestseller;
    });
    setData(filterData?.slice?.(0, 4));
  }, []);
  return (
    <>
      <Container>
        <div className="py-16">
          <div className="text-center pb-10 ">
            <h1 className="text-6xl drop-shadow-sm text">Our Best Seller</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {data?.map?.((e, i) => {
              return <CardCom key={i} data={e} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BestSeller;
