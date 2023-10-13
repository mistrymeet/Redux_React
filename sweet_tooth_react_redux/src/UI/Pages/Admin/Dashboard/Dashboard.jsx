import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { TfiPackage } from "react-icons/tfi";
import { MdOutlineAnalytics } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BE_URL } from "../../../../Configue";
import { login } from "../../../../Redux/Features/AuthSlice/AuthSlice";
import { toast } from "react-toastify";

function Dashboard() {
  let [userdata, setUserData] = useState([]);
  let count = useSelector((state) => {
    return state?.productReducer?.product;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}user/getAll`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        setUserData(resData?.data?.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <>
      <div className="h-auto w-full flex justify-center gap-16 pt-28">
        <Container>
          <div>
            <h1>Dashboard</h1>
            <hr />
          </div>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <NavLink to={"products"}>
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "18rem",
                }}
              >
                <CardHeader>Products</CardHeader>
                <CardBody className="flex justify-around items-center">
                  <CardTitle tag="h2">
                    <TfiPackage />
                  </CardTitle>
                  <CardText>
                    <h5>{count?.length}</h5>
                  </CardText>
                </CardBody>
              </Card>
            </NavLink>
            <NavLink to={"users"}>
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "18rem",
                }}
              >
                <CardHeader>Users</CardHeader>
                <CardBody className="flex justify-around items-center">
                  <CardTitle tag="h2">
                    <FiUser />
                  </CardTitle>
                  <CardText>
                    <h5>{userdata?.length}</h5>
                  </CardText>
                </CardBody>
              </Card>
            </NavLink>
            <NavLink to={"orders"}>
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "18rem",
                }}
              >
                <CardHeader>Orders</CardHeader>
                <CardBody className="flex justify-around items-center">
                  <CardTitle tag="h2">
                    <TbTruckDelivery />
                  </CardTitle>
                  <CardText>
                    <h5>5</h5>
                  </CardText>
                </CardBody>
              </Card>
            </NavLink>
            <NavLink to={"analytics"}>
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "18rem",
                }}
              >
                <CardHeader>Analytics</CardHeader>
                <CardBody className="flex justify-around items-center">
                  <CardTitle tag="h2">
                    <MdOutlineAnalytics />
                  </CardTitle>
                </CardBody>
              </Card>
            </NavLink>
          </div>
        </Container>
      </div>

      <Outlet />
    </>
  );
}

export default Dashboard;
