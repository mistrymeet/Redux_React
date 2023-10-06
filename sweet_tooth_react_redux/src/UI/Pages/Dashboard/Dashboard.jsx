import React from "react";
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
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="h-auto w-full flex justify-center gap-16 pt-28">
        <Container>
          <div>
            <h1>Dashboard</h1>
            <hr />
          </div>
          <div className="flex justify-center items-center gap-10">
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
                    <h5>5</h5>
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
                    <h5>5</h5>
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
          </div>
        </Container>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
