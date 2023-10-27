import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import "./CardCom.css";
import { CgHeart } from "react-icons/cg";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function CardCom({ data, onclick }) {
  const addWishList = () => {
    axios({
      method: "post",
      url: `${BE_URL}wishlist/create`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: {
        products: [data?._id],
      },
    })
      .then((resData) => console.log(resData?.data?.data))
      .catch((err) => toast.error(err?.message));
  };

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
          <Button className="w-20" color="danger" onClick={() => addWishList()}>
            <CgHeart className="m-auto" />
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default CardCom;
