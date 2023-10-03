import React from "react";
import { Layout } from "antd";
import HeaderCom from "../../Components/HeaderCom/HeaderCom";
import CarouselCom from "../../Components/Carousel/CarouselCom";
const { Content } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Content>
          <CarouselCom />
        </Content>
      </Layout>
    </>
  );
};
export default HomePage;
