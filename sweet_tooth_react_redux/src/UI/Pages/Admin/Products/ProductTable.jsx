import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import { fetchData } from "../../../../Redux/Features/ProductSlice/ProSlice";

function ProductTable() {
  const { product, err } = useSelector((state) => {
    return state?.productReducer;
  });

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product?.map?.((e, i) => {
            return (
              <tr key={e?.id}>
                <th scope="row">{i + 1}</th>
                <td>
                  <div className="grid place-content-center">
                    <img
                      src={e?.thumbnail}
                      alt=""
                      className="max-w-xs max-h-60"
                    />
                  </div>
                </td>
                <td>{e?.title}</td>
                <td className="truncate max-w-lg">{e?.description}</td>
                <td>{e?.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;
