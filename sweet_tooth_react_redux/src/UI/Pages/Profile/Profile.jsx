import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Container,
  Label,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { logout } from "../../../Redux/Features/AuthSlice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Profile.css";
import { emptyCart } from "../../../Redux/Features/CartSlice/CartSlice";

function Profile() {
  const AuthData = useSelector((state) => {
    return state?.authReducer?.user;
  });

  const dispatch = useDispatch();

  let navigate = useNavigate();

  function removeUser() {
    dispatch(emptyCart());
    dispatch(logout());
    navigate("/signin");
    toast.success("Logout SuccessFully");
  }
  return (
    <>
      <div className="pro h-auto w-full flex justify-center gap-16 pt-28 pb-16 backdrop-blur-md ">
        <Container>
          <div className="flex justify-between">
            <h1>
              Welcom back,{" "}
              {AuthData.userType === "admin" ? AuthData?.email : AuthData?.name}
            </h1>
            <Button color="danger" onClick={() => removeUser()}>
              Logout
            </Button>
          </div>
          <hr />
          <div className="flex gap-10">
            <div className="flex-1">
              <Card
                outline={"true"}
                className="w-full bg-transparent backdrop-blur-lg"
              >
                <CardHeader tag={"h4"} className="bg-transparent">
                  Accout Info
                </CardHeader>
                <ListGroup flush className="bg-transparent text-lg">
                  <ListGroupItem className="bg-transparent">
                    Name : {AuthData?.name}
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent">
                    Email : {AuthData?.email}
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent">
                    Mobile No. : {AuthData?.number}
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent">
                    Age : {AuthData?.age}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </div>
            <div className="flex-1 backdrop-blur-md">
              <Card className="w-full bg-transparent">
                <CardHeader className="bg-transparent" tag={"h4"}>
                  Residential Info
                </CardHeader>
                <ListGroup flush className="bg-transparent text-lg">
                  <ListGroupItem className="bg-transparent">
                    Address : {AuthData?.address?.[0]?.add}
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent">
                    City : {AuthData?.address?.[0]?.city}
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent">
                    State : {AuthData?.address?.[0]?.state}
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent">
                    Pin-Code : {AuthData?.address?.[0]?.pincode}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Profile;
