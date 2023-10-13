import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { BE_URL } from "../../../../Configue";

function Users() {
  let [userdata, setUserData] = useState([]);
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
        // console.log("rData", resData);
        setUserData(resData?.data?.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <>
      <Container>
        <h1 className="text-base">
          <Table bordered>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {userdata?.map?.((e, i) => {
                return (
                  <tr key={e?.id}>
                    <th>{i + 1}</th>
                    <td>{e?.name}</td>
                    <td>{e?.email}</td>
                    <td>{e?.age}</td>
                    <td>{e?.address?.[0]?.city || "--"}</td>
                    <td>{e?.address?.[0]?.state || "--"}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </h1>
      </Container>
    </>
  );
}

export default Users;
