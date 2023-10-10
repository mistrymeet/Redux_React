import React, { useState } from "react";
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

function ProductForm({ toggle, modal }) {
  // let [category, setCategory] = useState([]);
  let [productdata, setProductData] = useState({
    title: String,
    description: String,
    // gender: String,
    price: Number,
    thumbnail: String,
    discountPercentage: Number,
    category: [],
    availableStock: Number,
  });

  const options = [
    { value: "bars", label: "Chocolate Bars" },
    { value: "bites", label: "Chocolate Bites" },
    { value: "protine", label: "Protine Bars" },
    { value: "gift", label: "Gift Combos" },
  ];
  const animatedComponents = makeAnimated();

  const addData = () => {
    console.log(productdata);
  };

  // const addSelectData = (e) => {
  //   setCategory(e?.map((e) => e.value));
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
              <FormGroup>
                <Label for="exampleAddress">Description</Label>
                <Input
                  id="exampleDescription"
                  name="description"
                  placeholder="Enter Description"
                  onChange={(e) =>
                    setProductData({
                      ...productdata,
                      description: e?.target?.value,
                    })
                  }
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleAddress2">Gender</Label>
                <Input
                  id="exampleAddress2"
                  name="address2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup> */}
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePrice">Price</Label>
                    <Input
                      id="examplePrice"
                      name="price"
                      placeholder="Enter Price"
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
              </Row>
              <div className="mt-3 flex justify-center">
                <Button color="success" onClick={() => addData()}>
                  Submit
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
