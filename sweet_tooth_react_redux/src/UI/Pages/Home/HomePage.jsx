import React from "react";
import { Layout } from "antd";
import CarouselCom from "../../Components/Carousel/CarouselCom";
import BestSeller from "../../Components/BestSellerCom/BestSeller";
import Ing from "../../Components/Ing/Ing";
import DiscoverCom from "../../Components/DiscoverCom/DiscoverCom";
import ModelCom from "../../Components/ModelCom/ModelCom";
import CategoryCom from "../../Components/CategoryCom/CategoryCom";
const { Content } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="bg-white">
        <Content>
          <CarouselCom />
          <Ing />
          <BestSeller />
          <DiscoverCom />
          <ModelCom />
          <CategoryCom />
        </Content>
      </Layout>
    </>
  );
};
export default HomePage;
