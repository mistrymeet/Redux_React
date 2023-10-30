import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import { getAllCart } from "../../../Redux/Features/CartSlice/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { product } = useSelector((state) => state?.productReducer);
  const { cart, count } = useSelector((state) => state?.cartReducer);
  console.log("🚀 ~ file: Cart.jsx:11 ~ Cart ~ cart:", cart);

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

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
                    <th>Sr</th>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map?.((e, i) => {
                    return (
                      <tr key={e?._id}>
                        <td>{i + 1}</td>
                        <td>
                          <div className="max-w-sm">
                            <img src={e?.thumbnail} alt="" />
                          </div>
                        </td>
                        <td>{count}</td>
                        <td>{e?.price}</td>
                        <td>total</td>
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
