import React from "react";
import { Button } from "reactstrap";
import { logout } from "../../../Redux/Features/AuthSlice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const AuthData = useSelector((state) => {
    return state?.authReducer?.user?.email;
  });

  const dispatch = useDispatch();

  let navigate = useNavigate();

  function removeUser() {
    dispatch(logout());
    navigate("/signin");
    toast.success("Logout SuccessFully");
  }
  return (
    <>
      <div className="w-full h-screen bg-orange-400 grid place-content-center text-center">
        <h1>{AuthData}</h1>
        <Button color="danger" onClick={() => removeUser()}>
          Logout
        </Button>
      </div>
    </>
  );
}

export default Profile;
