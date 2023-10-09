import React from "react";
import RouterCom from "./Router/RouterCom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterCom />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
