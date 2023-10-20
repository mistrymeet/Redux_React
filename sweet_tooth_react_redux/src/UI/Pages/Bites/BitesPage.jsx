import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import CardCom from "../../Components/CardCom/CardCom";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProSlice";
import { useNavigate } from "react-router-dom";

function BitesPage({ textsearch }) {
  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
    window.scroll(0, 0);
  }, []);

  const { product, err } = useSelector((state) => {
    return state.productReducer;
  });

  useEffect(() => {
    let newdata = product?.filter?.((e) => {
      return e?.category?.some?.((e) => e === "bits");
    });
    setData(newdata);
  }, [product]);

  let fetch = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <>
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h2 className="font-semibold pb-10 font-mono">
            SMALL CHOCOLATES IN BITES
          </h2>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            SUMMER DEAL🦋 Get a large chocolate box as a gift (value 1800 INR).
            Right now we automatically add the popular Sinners' Choice box of 24
            premium chocolates to your basket when you add a box of your
            favorite bites to the basket.
          </p>
          <p className="w-2/5 m-auto text-justify pb-6 font-medium">
            Chocolate in bites from Simply Chocolate are bite-sized pieces of
            the finest premium chocolate. Bites from Simply Chocolate are made
            from the best, natural ingredients and are available in a wide
            selection of exciting flavors that are guaranteed to satisfy your
            taste buds.
          </p>
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

export default BitesPage;
