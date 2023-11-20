import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "reactstrap";
import { getAllCart } from "../../../Redux/Features/CartSlice/CartSlice";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { TbEdit, TbHeart, TbMinus, TbPlus } from "react-icons/tb";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state?.cartReducer);
  const [final, setFinal] = useState();
  console.log("🚀 ~ file: Cart.jsx:14 ~ Cart ~ cart:", cart);

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

  const total = () => {
    let sum = 0;
    cart.forEach((e) => {
      sum += e.productId.price * e.count;
    });
    return sum;
  };

  const deleteHandler = async (data, index) => {
    let filterdData = [];
    await cart.map((e, i) => {
      if (data._id !== e.productId._id) {
        filterdData.push({ productId: e.productId._id, count: e.count });
      }
    });

    axios({
      method: "post",
      url: `${BE_URL}cart/create`,
      data: { products: filterdData },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then(({ data }) => dispatch(getAllCart(data)))
      .catch((err) => toast.error(err.message));
  };

  const countUpdateHandler = (data, type) => {
    const modifiedCart = cart?.map?.((e, i) => {
      if (e.productId._id === data._id)
        return {
          productId: e.productId._id,
          count: type === "INC" ? e.count + 1 : e.count - 1,
        };
      else
        return {
          count: e.count,
          productId: e.productId._id,
        };
    });

    let newCartData = modifiedCart.filter((e) => {
      if (e.count < 0) {
        return (e.count = 0);
      } else {
        return e.count > 0;
      }
    });

    axios({
      method: "post",
      url: `${BE_URL}cart/create`,
      data: { products: newCartData },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearar ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        console.log("🚀 ~ file: Cart.jsx:64 ~ .then ~ resData:", resData);
        dispatch(getAllCart());
      })
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
                  <div className="card-header py-3 flex justify-between items-center">
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
                              onClick={() => deleteHandler(productId, i)}
                            >
                              <AiOutlineDelete />
                            </Button>
                            <Button color="danger" className="mx-2">
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
                              <Button
                                color="info"
                                className="me-2 h-auto"
                                onClick={() =>
                                  countUpdateHandler(productId, "DEC")
                                }
                              >
                                <TbMinus />
                              </Button>
                              <div className="flex flex-col text-center ">
                                <input
                                  disabled
                                  id="form1"
                                  min={0}
                                  name="quantity"
                                  value={count}
                                  type="number"
                                  className="form-control"
                                />
                              </div>
                              <Button
                                color="info"
                                className="ms-2"
                                onClick={() =>
                                  countUpdateHandler(productId, "INC")
                                }
                              >
                                <TbPlus />
                              </Button>
                            </div>
                            {/* Quantity */}
                            {/* Price */}
                            <p className="text-start text-md-center">
                              <strong>
                                ₹ {productId?.price} * {count} ={" "}
                                {productId?.price * count}
                              </strong>
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
                        <span>{total()}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>
                          {total() <= 0 ? (
                            0
                          ) : total() > 1000 ? (
                            <span className="text-lime-500">free</span>
                          ) : (
                            <span className="text-red-600">+ 300</span>
                          )}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>
                            {total() >= 10000
                              ? total() - (total() * 10) / 100
                              : total() <= 0
                              ? 0
                              : total() > 1000
                              ? total()
                              : total() + 300}
                          </strong>
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block mb-2"
                    >
                      Go to checkout
                    </button>
                    <marquee className="text-red-600">
                      Special 10% discount is live if you purchase 10000 or
                      more...{" "}
                    </marquee>
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
