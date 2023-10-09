import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Product from "../../../Utils/Product.json";
import CardCom from "../../Components/CardCom/CardCom";

function BarKits({ textsearch }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    let productsort = Product?.sort((a, b) => {
      return b.price - a.price;
    });
    let filterData = productsort?.filter?.((e) => {
      return (
        e?.category === "bars" &&
        e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
      );
    });
    setData(filterData.slice(0, 18));
  }, [textsearch]);
  return (
    <>
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h2 className="font-semibold pb-10 font-mono">
            PACKAGES OF CHOCOLATE BARS IN BAR KITS
          </h2>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            We have helped you and put together 3 bar kits based on the most
            requested combinations: A protein pack, a vegan pack and a pack for
            all those who just want to taste the different bars.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {data?.map?.((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default BarKits;
