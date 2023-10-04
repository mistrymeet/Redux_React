import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../../Redux/Features/Auth/AuthSlice";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

function SignIn() {
  let [userdata, setUserData] = useState({
    email: "admin@admin.com",
    password: "123456",
  });

  let dispatch = useDispatch();

  let navigate = useNavigate();

  function addData() {
    console.log("userdata", userdata);
    axios
      .post("http://localhost:3000/user/signin", userdata)
      .then((resData) => {
        dispatch(login(resData?.data));
        if (resData?.data?.data?.userType === "admin") {
          navigate("/dashboard");
        } else navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <>
      <div className="signin h-screen w-full grid place-content-center">
        <div className="w-96 p-10 form rounded-md">
          <div className="flex items-center justify-center flex-col gap-2 pb-12">
            <h3 className="font-bold">Welcome</h3>
            <img src="/logo.png" height={"80px"} width={"80px"} alt="" />
          </div>
          <Form className="mb-10">
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) =>
                  setUserData({ ...userdata, email: e?.target?.value })
                }
                value={userdata?.email}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setUserData({ ...userdata, password: e?.target?.value })
                }
                value={userdata?.password}
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <Button
              className="w-full"
              color="success"
              onClick={() => addData()}
            >
              Submit
            </Button>
          </Form>
          <p className="text-center">
            Don't have an account?{" "}
            <NavLink to={"/signup"}>
              <span className="text-red-600">Sign up</span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
