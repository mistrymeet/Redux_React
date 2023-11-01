import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "reactstrap";
import {
  getAllCart,
  removeCart,
} from "../../../Redux/Features/CartSlice/CartSlice";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { TbEdit, TbHeart, TbMinus, TbPlus } from "react-icons/tb";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function Cart() {
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state?.productReducer);
  const { cart } = useSelector((state) => state?.cartReducer);
  console.log("🚀 ~ file: Cart.jsx:10 ~ Cart ~ cart:", cart);

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

  // const increase = (count, i) => {
  //   console.log("con", count);
  // };

  const deleteHandler = (data, index) => {
    axios({
      method: "delete",
      url: `${BE_URL}cart/delete/${data._id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => dispatch(removeCart(index)))
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Container className="p-0">
        <section className="h-100 pt-16">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card hover:shadow-none">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                  </div>
                  {cart?.map?.(({ productId, count }, i) => {
                    return (
                      <div className="card-body" key={i}>
                        {/* Single item */}
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* Image */}
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={productId?.thumbnail}
                                className="w-100"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                />
                              </a>
                            </div>
                            {/* Image */}
                          </div>
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            {/* Data */}
                            <p>
                              <strong>{productId?.title}</strong>
                            </p>
                            <p>{productId?.category}</p>
                            <p className="truncate">{productId?.description}</p>
                            <Button
                              color="info"
                              className="me-2"
                              onClick={() => deleteHandler(productId, i)}
                            >
                              <AiOutlineDelete />
                            </Button>
                            <Button color="danger" className="me-2">
                              <TbHeart />
                            </Button>
                            {/* Data */}
                          </div>
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* Quantity */}
                            <label
                              className="form-label flex justify-center font-semibold"
                              htmlFor="form1"
                            >
                              Quantity
                            </label>
                            <div className=" flex mb-4 max-w-lg">
                              <Button color="info" className="me-2 h-auto">
                                <TbMinus />
                              </Button>
                              <div className="flex flex-col text-center ">
                                <input
                                  id="form1"
                                  min={0}
                                  name="quantity"
                                  defaultValue={count}
                                  type="number"
                                  className="form-control"
                                />
                              </div>
                              <Button color="info" className="ms-2">
                                <TbPlus />
                              </Button>
                            </div>
                            {/* Quantity */}
                            {/* Price */}
                            <p className="text-start text-md-center">
                              <strong>₹ {productId?.price}</strong>
                            </p>
                            {/* Price */}
                          </div>
                        </div>
                        {/* Single item */}
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>$53.98</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$53.98</strong>
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Cart;
