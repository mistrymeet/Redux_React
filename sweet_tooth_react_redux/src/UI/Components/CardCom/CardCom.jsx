import React, { useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import "./CardCom.css";

function CardCom({ data, onclick }) {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
        className="card overflow-hidden"
        role="button"
        onClick={() => onclick(data._id)}
      >
        <div className="overflow-hidden">
          <img
            alt="Sample"
            src={data?.thumbnail}
            className="cardimg bg-gray-200"
          />
        </div>
        <CardBody className="overflow-hidden">
          <CardTitle tag="h6">{data?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            ₹ {data?.price}
          </CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
}

export default CardCom;
