import React from "react";

function CarouselCom() {
  return (
    <>
      <div className="h-full w-full bg-cover bg-center relative ">
        <img src="/Images/img4.jpg" alt="" />
        <div className="absolute top-0 z-10 drop-shadow-md">
          <img src="/Images/d4.png" alt="" />
        </div>
        <div
          className="absolute top-40 left-0 text-yellow-900 w-full"
          style={{ fontSize: "200px" }}
        >
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="40"
            className="font-mono"
          >
            Let the chocolate melt your worries away..
          </marquee>
        </div>
      </div>
      <div
        className="absolute left-0 text-yellow-500 w-full"
        style={{ fontSize: "200px", top: "550px" }}
      >
        <marquee
          behavior="scroll"
          direction="right"
          scrollamount="45"
          className="font-mono"
        >
          ..heaven little our to welcome
        </marquee>
      </div>
    </>
  );
}

export default CarouselCom;
