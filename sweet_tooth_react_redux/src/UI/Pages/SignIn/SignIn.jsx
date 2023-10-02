import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../../Redux/Features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  let [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  let dispatch = useDispatch();

  let navigate = useNavigate();

  function addData() {
    dispatch(login(userdata));
    navigate("/");
  }

  return (
    <>
      <div className="h-screen w-full bg-fuchsia-400 grid place-content-center">
        <div className="w-96">
          <Form>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) =>
                  setUserData({ ...userdata, email: e?.target?.value })
                }
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
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <Button color="success" onClick={() => addData()}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
