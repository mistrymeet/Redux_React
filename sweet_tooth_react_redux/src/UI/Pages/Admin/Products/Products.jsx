import React, { useEffect } from "react";
import { Container } from "reactstrap";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../../Redux/Features/ProductSlice/ProSlice";
import Product from "../../../../Utils/Product.json";

function Products() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <Container>
        <ProductTable />
        <ProductForm />
      </Container>
    </>
  );
}

export default Products;
