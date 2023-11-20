import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import CardCom from "../../Components/CardCom/CardCom";
import "./Bars.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProSlice";
import { useNavigate } from "react-router-dom";

function BarsPage({ textsearch }) {
  let [productdata, setProductData] = useState([]);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state?.searchReducer);

  useEffect(() => {
    dispatch(fetchData());
    window.scroll(0, 0);
  }, []);
  const { product, err } = useSelector((state) => {
    return state?.productReducer;
  });

  useEffect(() => {
    let data = product?.filter?.((e) => {
      return (
        e?.category?.some?.((e) => e === "bars") &&
        e?.title?.toLowerCase?.()?.includes?.(search?.toLowerCase?.())
      );
    });
    setProductData(data);
  }, [product, search]);

  let navigate = useNavigate();

  const reDirect = (id) => {
    navigate(`/singleproduct/${id}`);
  };
  return (
    <>
      <div className="bars">
        <Container className=" py-24 text-center drop-shadow-md">
          <div>
            <h2 className="font-semibold pb-10 font-mono">
              CHOCOLATE BARS WITH PREMIUM CHOCOLATE
            </h2>
            <p className="w-2/5 m-auto text-justify pb-10 font-medium">
              Taste a natural Danish produced chocolate bar full of personality
              and completely without additives. Open the colorful foil and meet
              the scent of freshly produced chocolate with a hint of everything
              from licorice and caramel to marzipan and mint.
            </p>
          </div>
          {/* <div className="flex flex-wrap justify-center gap-3">
            {prodata?.map?.((e, i) => {
              return <CardCom key={i} data={e} />;
            })}
          </div> */}
          <div className="flex flex-wrap justify-center gap-3">
            {productdata?.map?.((e, i) => {
              return <CardCom key={i} data={e} onclick={reDirect} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default BarsPage;
