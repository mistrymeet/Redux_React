import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineEdit } from "react-icons/md";
import {
  addProduct,
  deleteProduct,
} from "../../../../Redux/Features/ProductSlice/ProSlice";

function ProductTable({ setProductData, toggle }) {
  const { product, err } = useSelector((state) => {
    return state?.productReducer;
  });

  const dispatch = useDispatch();

  const deleteHandler = (data, index) => {
    dispatch(deleteProduct({ id: data?._id, index }));
  };

  const updateHandler = (data, index) => {
    setProductData(data);
    toggle();
  };

  if (err.length > 0) {
    toast.error(err);
  }
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product?.map?.((e, i) => {
            return (
              <tr key={e?._id}>
                <th scope="row">{i + 1}</th>
                <td>
                  <div className="grid place-content-center">
                    <img
                      src={e?.thumbnail}
                      alt=""
                      className="max-w-xs max-h-52"
                    />
                  </div>
                </td>
                <td>{e?.title}</td>
                <td className="truncate max-w-lg">{e?.description}</td>
                <td>{e?.price}</td>
                <td>
                  <div className="flex gap-2 items-center">
                    <Button color="danger" onClick={() => deleteHandler(e, i)}>
                      <TiDeleteOutline className="text-xl" />
                    </Button>
                    <Button color="info" onClick={() => updateHandler(e, i)}>
                      <MdOutlineEdit className="text-xl" />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;
