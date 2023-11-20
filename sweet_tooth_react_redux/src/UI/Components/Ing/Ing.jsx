import React from "react";
import { Button, Container } from "reactstrap";
import "./Ing.css";

let data = [
  {
    title: "Ingredients",
    subtitle:
      "Made with hand-picked ingredients from across the globe. Be it the finest cocoa from Ghana, the Ivory Coast or Venezuela, or the exotic additions - Ancho Chilli, Acacia Nectar and French Sea Salt.",
  },
  {
    title: "Handcrafted Process",
    subtitle:
      "Our Master Chocolatiers strive for perfection. You can see it in the hours they spend conching & tempering the chocolate to create a symphony of exquisite tastes, textures and aromas.",
  },
  {
    title: "Artistic Form & Flavour",
    subtitle:
      "We are anything but ordinary. Our chocolates test the limits of our imagination, coming alive in extraordinary forms and repertoire of flavours.",
  },
  {
    title: "Luxurious Experience",
    subtitle:
      "To experience Fabelle is to be enchanted by unique flavours & decadent sensations. Our creations are a delight to every sense, creating beautiful moments of magic & absolute satisfaction.",
  },
];

function Ing() {
  return (
    <>
      <div className="pt-16">
        <div className="text-center font-mono capitalize font-medium pb-6">
          <h1 className="text-6xl drop-shadow-sm text">
            An epitome of Chocolate Experience
          </h1>
        </div>
        <div className="offer-attach">
          <div className="flex justify-center items-center gap-5 h-full flex-wrap">
            {data?.map?.((e, i) => {
              return (
                <div
                  className=" w-80 p-6 overflow-hidden off grid place-content-center h-96"
                  key={i}
                >
                  <div className="border-2 p-6 justify-center offer1 h-80 grid place-content-center">
                    <h2 className="uppercase">{e?.title}</h2>
                    <p>{e?.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ing;
