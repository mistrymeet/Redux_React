import React, { useEffect, useState } from "react";
import CardCom from "../CardCom/CardCom";
import { Container } from "reactstrap";
import "./BestSeller.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProSlice";
import { useNavigate } from "react-router-dom";

function BestSeller() {
  const dispatch = useDispatch();
  let [data, setData] = useState([]);
  let { product } = useSelector((state) => state?.productReducer);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    const sortedData = [...product].sort((a, b) => b.bestseller - a.bestseller);
    const slicedData = sortedData.slice(0, 4);
    setData(slicedData);
  }, [product]);

  const fetch = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <>
      <Container>
        <div className="py-16">
          <div className="text-center pb-10 ">
            <h1 className="text-6xl drop-shadow-sm text">Our Best Seller</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {data?.map?.((e, i) => {
              return <CardCom key={i} data={e} onclick={fetch} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BestSeller;
