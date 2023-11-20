import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import "./CardCom.css";
import { CgHeart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { addWish } from "../../../Redux/Features/WishListSlice/WishListSlice";

function CardCom({ data, onclick }) {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishReducer);

  const addWishList = () => {
    const index = wishlist.indexOf(data?._id);
    let inputWish = [...wishlist];

    if (index === -1) {
      inputWish.push(data?._id);
    } else {
      null; // Remove the product from the wishlist
    }

    axios({
      method: "post",
      url: `${BE_URL}wishlist/create`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: {
        products: inputWish,
      },
    })
      .then((resData) => console.log("resData", resData))
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
