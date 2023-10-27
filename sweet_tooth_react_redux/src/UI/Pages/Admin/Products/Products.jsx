import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../../Redux/Features/ProductSlice/ProSlice";
import { useState } from "react";

function Products() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let [productdata, setProductData] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const addFun = () => {
    toggle();
    setProductData({});
  };

  return (
    <>
      <Container className="my-10">
        <hr />
        <div className="flex justify-end ">
          <div className="w-60">
            <Button color="danger" className="w-full" onClick={addFun}>
              Add Product
            </Button>
          </div>
        </div>
        <hr />
        <ProductForm
          productdata={productdata}
          setProductData={setProductData}
          modal={modal}
          toggle={toggle}
        />
        <ProductTable setProductData={setProductData} toggle={toggle} />
      </Container>
    </>
  );
}

export default Products;
