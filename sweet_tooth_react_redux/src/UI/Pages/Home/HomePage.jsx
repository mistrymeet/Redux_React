import React, { useEffect } from "react";
import { Layout } from "antd";
import CarouselCom from "../../Components/Carousel/CarouselCom";
import BestSeller from "../../Components/BestSellerCom/BestSeller";
import Ing from "../../Components/Ing/Ing";
import DiscoverCom from "../../Components/DiscoverCom/DiscoverCom";
import ModelCom from "../../Components/ModelCom/ModelCom";
import CategoryCom from "../../Components/CategoryCom/CategoryCom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../../../Redux/Features/CartSlice/CartSlice";
const { Content } = Layout;

const HomePage = () => {
  window.scroll(0, 0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

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
