import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Redux/Features/ProductSlice/ProSlice";

function ProductForm({ toggle, modal, setProductData, productdata }) {
  let [formProductdata, setFormProductData] = useState({
    title: "",
    description: "",
    gender: "",
    price: "",
    thumbnail: "",
    discountPercentage: "",
    category: [],
    color: [],
    availableStock: "",
  });
  useEffect(() => {
    setFormProductData(productdata);
  }, [productdata]);
  const options = [
    { value: "bars", label: "Chocolate Bars" },
    { value: "bits", label: "Chocolate Bites" },
    { value: "protine", label: "Protine Bars" },
    { value: "gift", label: "Gift Combos" },
  ];
  const colorOptions = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

  const addData = () => {
    dispatch(addProduct(productdata));
    setProductData({
      title: "",
      description: "",
      gender: "",
      price: "",
      thumbnail: "",
      discountPercentage: "",
      category: [],
      color: [],
      availableStock: "",
    });
  };

  // const addSelectData = (e) => {
  //   setCategory(e?.map((e) => e.value));
  // };

  // const updateData = () => {
  //   dispatch(updateProduct(productdata?._id));
  // };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Product Info..</ModalHeader>
        <ModalBody>
          <div className="bg-slate-300 p-6">
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleTitle">Title</Label>
                    <Input
                      id="exampleTitle"
                      name="title"
                      placeholder="Enter Title"
                      type="text"
                      value={productdata?.title}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          title: e?.target?.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleAddress">Description</Label>
                    <Input
                      id="exampleDescription"
                      name="description"
                      placeholder="Enter Description"
                      value={productdata?.description}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          description: e?.target?.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <FormGroup>
                    <Label for="exampleAddress2">Gender</Label>
                    <Row>
                      <Col>
                        <FormGroup className="flex gap-1">
                          <Label for="male">Male</Label>
                          <Input
                            id="male"
                            checked={productdata?.gender === "male"}
                            type="radio"
                            onChange={() =>
                              setProductData({ ...productdata, gender: "male" })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup className="flex gap-1">
                          <Label for="female">Female</Label>
                          <Input
                            id="female"
                            checked={productdata.gender === "female"}
                            type="radio"
                            onChange={() =>
                              setProductData({
                                ...productdata,
                                gender: "female",
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup className="flex gap-1">
                          <Label for="kids">Kids</Label>
                          <Input
                            id="kids"
                            checked={productdata.gender === "kids"}
                            type="radio"
                            onChange={() =>
                              setProductData({ ...productdata, gender: "kids" })
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePrice">Price</Label>
                    <Input
                      id="examplePrice"
                      name="price"
                      placeholder="Enter Price"
                      value={productdata?.price}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          price: e?.target?.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleDiscountedPercentage">
                      Discount Percentage
                    </Label>
                    <Input
                      id="exampleDiscountedPercentage"
                      name="discountedPercentage"
                      value={productdata?.discountPercentage}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          discountPercentage: e?.target?.value,
                        })
                      }
                      placeholder="Discount Percentage"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleThumbnail">Image</Label>
                    <Input
                      id="exampleThumbnail"
                      name="thumbnail"
                      value={productdata?.thumbnail}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          thumbnail: e?.target?.value,
                        })
                      }
                      placeholder="Add Image Url"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleAvailbleStock">Availble Stock</Label>
                    <Input
                      id="exampleAvailbleStock"
                      name="svailbleStock"
                      value={productdata?.availableStock}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          availableStock: e?.target?.value,
                        })
                      }
                      placeholder="Add Stock"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleCategory">Select Category</Label>
                    <Select
                      options={options}
                      isMulti
                      components={animatedComponents}
                      placeholder={"Select Categories"}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          category: e.map((e) => e.value),
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Select Color</Label>
                    <Select
                      options={colorOptions}
                      isMulti
                      components={animatedComponents}
                      placeholder={"Select Color"}
                      onChange={(e) =>
                        setProductData({
                          ...productdata,
                          color: e?.map((e) => e.value),
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className="mt-3 flex justify-center">
                <Button color="success" onClick={() => addData()}>
                  Submit
                </Button>
                <Button color="success" onClick={() => updateData()}>
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ProductForm;
