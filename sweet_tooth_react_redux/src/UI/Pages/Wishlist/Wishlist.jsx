import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import { BE_URL } from "../../../Configue";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProSlice";
import { toast } from "react-toastify";

function Wishlist() {
  const { user } = useSelector((state) => state?.authReducer);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}wishlist/getWishListById/${user?._id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }).then((resData) => console.log("KKKK", resData));
  }, []);
  return (
    <>
      <Container>
        <div className="pt-24">
          <h1>Wishlist</h1>
        </div>
        <hr />
        <div>
          <Table bordered>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
