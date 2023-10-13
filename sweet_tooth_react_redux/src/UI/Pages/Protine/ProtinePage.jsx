import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Product from "../../../Utils/Product.json";
import CardCom from "../../Components/CardCom/CardCom";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function ProtinePage({ textsearch }) {
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
            e?.category?.some?.((e) => e === "protine") &&
            e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
          );
        });
        setData(filterData);
      })
      .catch((err) => toast.error(err?.message));
  }, [textsearch]);
  return (
    <>
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h2 className="font-semibold pb-10 font-mono">
            PROTEIN BARS WITH CHOCOLATE
          </h2>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            From the very first test of our protein bars many years ago, the
            main idea was to make a protein bar that tastes of the ingredients
            in it and not of artificial banana - or other artificial flavors. A
            long process with many tastings. But we are proud of the end result
            and love our protein family!
          </p>
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          {data?.map((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default ProtinePage;
