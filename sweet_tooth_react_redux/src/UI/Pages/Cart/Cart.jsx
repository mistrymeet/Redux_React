import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProSlice";

function Cart() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state?.productReducer);
  const { cart, count } = useSelector((state) => state?.cartReducer);
  console.log("🚀 ~ file: Cart.jsx:14 ~ Cart ~ cart:", cart);
  const [cartdata, setCartData] = useState();
  console.log("🚀 ~ file: Cart.jsx:15 ~ Cart ~ cartdata:", cartdata);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    let newData = product?.filter?.((e) => {
      return e?._id == cart;
    });
    setCartData(newData);
  }, []);

  // useEffect(() => {
  //   const newData = product?.filter?.((e) => {
  //     return e?._id === cartdata;
  //   });
  //   setProductData(newData);
  // }, [product]);

  return (
    <>
      <Container className="p-0">
        <div className="h-auto pt-28 flex pb-16">
          <div style={{ flex: 2.5 }} className="p-10">
            <div className="flex justify-between items-end">
              <h2>Shopping Cart</h2>
              <h4 className="text-fuchsia-600">Items</h4>
            </div>
            <hr style={{ height: 2, backgroundColor: "fuchsia" }} />

            <div className="p-2">
              <Table striped class="table-fixed">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartdata?.map?.((e, i) => {
                    return (
                      <tr key={e?._id}>
                        <td>
                          <div>
                            <img src={e?.thumbnail} alt="" />
                          </div>
                        </td>
                        <td>{e?.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="flex-1 p-10 bg-slate-200 h-auto">
            <div className="flex items-end ">
              <h2>Order Summary</h2>
            </div>
            <hr style={{ height: 2, backgroundColor: "fuchsia" }} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
