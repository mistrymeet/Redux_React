import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { removeCart } from "../../../Redux/Features/CartSlice/CartSlice";

function Cart() {
  let [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
  }

  const cartItems = useSelector((state) => {
    return state?.cartReducer;
  });
  console.log(
    "🚀 ~ file: Cart.jsx:12 ~ cartItems ~ cartItems:",
    cartItems?.cart
  );
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(removeCart(e?._id));
  };

  return (
    <>
      <Container className="p-0">
        <div className="h-auto pt-28 flex pb-16">
          <div style={{ flex: 2.5 }} className="p-10">
            <div className="flex justify-between items-end">
              <h2>Shopping Cart</h2>
              <h4 className="text-fuchsia-600">
                {cartItems?.cart?.length} Items
              </h4>
            </div>
            <hr style={{ height: 2, backgroundColor: "fuchsia" }} />
            {cartItems?.cart?.length > 0 ? (
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
                    {cartItems?.cart?.map?.((e, i) => {
                      return (
                        <tr key={e?._id}>
                          <td className="flex gap-3" style={{ width: "35rem" }}>
                            <div className="max-w-xs">
                              <img src={e?.thumbnail} alt="" />
                            </div>
                            <div className="grid place-content-center">
                              <h5>{e?.title}</h5>
                              <h6>{e?.category}</h6>
                              <p
                                className="text-red-600 cursor-pointer"
                                onClick={() => removeHandler(e)}
                              >
                                Remove
                              </p>
                            </div>
                          </td>
                          <td style={{ width: "15rem" }}>
                            <div className="flex items-center">
                              <span onClick={() => setCount(count + 1)}>
                                <AiOutlinePlusCircle />
                              </span>
                              <span className="px-3">{count}</span>
                              <span onClick={() => setCount(count - 1)}>
                                <AiOutlineMinusCircle />
                              </span>
                            </div>
                          </td>
                          <td style={{ width: "10rem" }}>{e?.price}</td>
                          <td style={{ width: "10rem" }}>
                            {count + 1 ? e?.price * count : null}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              cartItems?.msg
            )}
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
