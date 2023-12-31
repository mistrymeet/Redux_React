import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { TbReceiptRefund, TbReplace, TbTruckDelivery } from "react-icons/tb";
import { Button, Container } from "reactstrap";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./SingleProduct.css";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/Features/AuthSlice/AuthSlice";
import { data } from "autoprefixer";
import { getAllCart } from "../../../Redux/Features/CartSlice/CartSlice";

function SingleProduct() {
  let [displayimg, setDisplayImg] = useState(null);
  let [productData, setProductData] = useState({});
  const dispatch = useDispatch();

  let [count, SetCount] = useState(0);
  useEffect(() => {
    if (count < 0) {
      return SetCount(0);
    }
  }, []);
  let { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}product/getProductById/${id}`,
    })
      .then((resData) => {
        setProductData(resData?.data?.data);
      })
      .catch((err) => toast.error(err));
    window.scroll(0, 0);
  }, []);
  const { cart } = useSelector((state) => state?.cartReducer);

  // 653f61455b07f04cc183ac91
  const addToCart = () => {
    console.log("🚀 ~ file: SingleProduct.jsx:45 ~ addToCart ~ id:", id);
    const index = cart.findIndex((e) => e?.productId?._id === id);
    console.log("======> index:", index);
    let inputCart = [...cart];
    // console.log("count---===>", inputCart[index].count);
    // console.log("count", count);
    // console.log("jffffffffffffjj:", inputCart[index].count + count);
    // let hello = {
    //   count: inputCart[index].count + count,
    // };
    // console.log("🚀 ~ file: SingleProduct.jsx:56 ~ addToCart ~ hello:", hello);

    console.log("------>", inputCart);
    if (index === -1) {
      inputCart.push({ productId: id, count: count });
    } else {
      let oldCount = inputCart[index].count + count;
      console.log(
        "🚀 ~ file: SingleProduct.jsx:61 ~ addToCart ~ oldCount:",
        oldCount
      );
      inputCart[index] = {
        productId: inputCart[index].productId?._id,
        count: oldCount,
      };
    }
    console.log("------>", inputCart);
    axios({
      method: "post",
      url: `${BE_URL}cart/create`,
      data: { products: inputCart },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        dispatch(getAllCart());
      })
      .catch((err) => toast.error(err?.message));

    SetCount(0);
  };

  return (
    <>
      <Content>
        <Container>
          <div className="sp flex my-28 ">
            <div className="left flex-1 flex gap-2 items-center">
              <div className="imges flex flex-col gap-2 cursor-pointer flex-wrap">
                {productData?.images?.map((e, i) => (
                  <img
                    key={i}
                    src={e}
                    alt=""
                    onClick={() => setDisplayImg(e)}
                  />
                ))}
              </div>
              <div className="singleImg flex items-center justify-center">
                <img
                  src={displayimg || productData?.thumbnail}
                  alt=""
                  height={"400px"}
                  width={"400px"}
                  className="backdrop-blur-lg"
                />
              </div>
            </div>
            <div className="right flex-1 items-start">
              <p className="text-4xl">{productData?.title}</p>
              <p className="font-medium">
                <span>MRP</span>
                <span>
                  {productData?.discountPercentage === 0 || null ? (
                    <>
                      <span className="text-3xl ms-1">
                        {productData?.price}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        style={{
                          textDecoration: productData?.discountPercentage
                            ? "line-through"
                            : null,
                        }}
                        className="px-1"
                      >
                        {productData?.price}
                      </span>
                      <span className="text-3xl">
                        {productData?.price -
                          (productData?.price *
                            productData?.discountPercentage) /
                            100}
                      </span>
                    </>
                  )}
                </span>
              </p>
              {/* <p className="text-fuchsia-800 text-base font-medium">
                Deal of the Day :
              </p> */}

              <p className="text-justify">{productData?.description}</p>

              <div className="symbols flex justify-evenly gap-10 py-1 text-base items-center">
                <div>
                  <TbTruckDelivery className="text-2xl m-auto" />
                  Free Delivery
                </div>
                <div>
                  <TbReplace className="text-2xl m-auto" />7 days replacement
                </div>
                <div>
                  <TbReceiptRefund className="text-2xl m-auto" />
                  Easy Return
                </div>
              </div>
              <hr />

              <div className="available">
                <p>
                  Available :<b className="text-green-500 ps-1">In Stock</b>
                </p>
                <p>
                  Category :<b className="ps-1">{productData?.category}</b>
                </p>
              </div>
              <hr style={{ border: "2px solid black" }} />
              <div className="addtocart flex items-center gap-3">
                <Button color="danger" onClick={() => SetCount(count - 1)}>
                  <AiOutlineMinusCircle className="text-lg cursor-pointer" />
                </Button>
                <div type="text" className="w-10 text-center text-lg">
                  {count}
                </div>

                <Button color="warning" onClick={() => SetCount(count + 1)}>
                  <AiOutlinePlusCircle className="text-lg cursor-pointer" />
                </Button>
              </div>
              <Button
                className="uppercase mt-6"
                color="success"
                onClick={() => addToCart()}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Container>
      </Content>
    </>
  );
}

export default SingleProduct;
