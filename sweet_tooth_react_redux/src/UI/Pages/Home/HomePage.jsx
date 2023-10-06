import React from "react";
import { Layout } from "antd";
import CarouselCom from "../../Components/Carousel/CarouselCom";
import Offer from "../../Components/Ing/Ing";
import BestSeller from "../../Components/BestSellerCom/BestSeller";
import Ing from "../../Components/Ing/Ing";
const { Content } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="bg-white">
        <Content>
          <CarouselCom />
          <Ing />
          <BestSeller />
        </Content>
      </Layout>
    </>
  );
};
export default HomePage;
