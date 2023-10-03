import React from "react";
import HeaderCom from "../../Components/HeaderCom/HeaderCom";
import { Content } from "antd/es/layout/layout";
import { Container } from "reactstrap";

function BarsPage() {
  return (
    <>
      <Container className="p-0">
        <div className="h-screen w-full text-7xl grid place-content-center">
          <h1>Bars</h1>
        </div>
      </Container>
    </>
  );
}

export default BarsPage;
