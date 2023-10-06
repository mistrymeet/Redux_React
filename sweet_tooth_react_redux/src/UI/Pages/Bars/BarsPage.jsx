import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Products from "../../../Utils/Prodcts.json";
import CardCom from "../../Components/CardCom/CardCom";
import "./Bars.css";

function BarsPage({ textsearch }) {
  let [prodata, setProData] = useState([]);
  useEffect(() => {
    let filterdata = Products?.filter?.((e) => {
      return (
        e?.category === "bars" &&
        e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
      );
    });
    setProData(filterdata);
  }, [textsearch]);
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
          <div className="flex flex-wrap justify-center gap-3">
            {prodata?.map?.((e, i) => {
              return <CardCom key={i} data={e} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default BarsPage;
