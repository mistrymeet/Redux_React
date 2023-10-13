import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Product from "../../../Utils/Product.json";
import CardCom from "../../Components/CardCom/CardCom";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function GiftBoxesPage({ textsearch }) {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}product/getAll`,
    })
      .then((resData) => {
        let newData = resData?.data?.data;
        let filterData = newData?.filter?.((e) => {
          return (
            e?.category?.some?.((e) => e === "giftbox") &&
            e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
          );
        });
        setData(filterData);
      })
      .catch((err) => toast.error(err?.message));
  }, [textsearch]);

  return (
    <>
      <Container className=" py-24 text-center drop-shadow-md">
        <div>
          <h2 className="font-semibold pb-10 font-mono">
            CHOCOLATE GIFT BOXES
          </h2>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            A statement for any occasion written on beautiful boxes with a sneak
            peek of the chocolate pieces of premium white, dark and milk
            chocolate with each their own flavor combination. Would you like to
            give a box of chocolates as a gift? So remember to add a personal
            greeting on a postcard at checkout.
          </p>
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          {data?.map?.((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default GiftBoxesPage;
