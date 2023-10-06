import React from "react";
import { Container } from "reactstrap";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function Products() {
  return (
    <>
      <Container>
        <h1 className="bg-amber-200 grid place-content-center text-3xl h-screen w-full">
          <ProductForm />
          <ProductTable />
        </h1>
      </Container>
    </>
  );
}

export default Products;
