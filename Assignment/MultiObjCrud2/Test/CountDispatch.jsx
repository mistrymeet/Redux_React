import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { countAction } from '../Redux/Count/Action'

function CountDispatch({ add }) {

    let [formdata, setFormData] = useState({
        name: {
            first: '',
            last: ''
        },
        auth: {
            email: '',
            password: ''
        },
        address1: {
            plotno: '',
            street: '',
            landmark: ''
        },
        address2: {
            city: '',
            state: '',
            country: ''
        }
    })

    function addData() {
        add(countAction(formdata))
        setFormData({
            name: {
                first: '',
                last: ''
            },
            auth: {
                email: '',
                password: ''
            },
            address1: {
                plotno: '',
                street: '',
                landmark: ''
            },
            address2: {
                city: '',
                state: '',
                country: ''
            }
        })
    }

    return (
        <>
            <div className='h-screen w-full bg-green-100 grid place-content-center text-center'>
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="first">
                                    First Name
                                </Label>
                                <Input
                                    id="firstname"
                                    name="first"
                                    placeholder="Enter first name"
                                    type="text"
                                    onChange={(e) => setFormData({
                                        ...formdata, name: {
                                            ...formdata.name, first: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.name?.first}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lastname">
                                    Last Name
                                </Label>
                                <Input
                                    id="lastname"
                                    name="last"
                                    placeholder="Enter lastname"
                                    type="text"
                                    onChange={(e) => setFormData({
                                        ...formdata, name: {
                                            ...formdata.name, last: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.name?.last}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                    onChange={(e) => setFormData({
                                        ...formdata, auth: {
                                            ...formdata.auth, email: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.auth?.email}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password placeholder"
                                    type="password"
                                    onChange={(e) => setFormData({
                                        ...formdata, auth: {
                                            ...formdata.auth, password: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.auth?.password}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Plot No">
                                    Plot No
                                </Label>
                                <Input
                                    id="Plot No"
                                    name="plotno"
                                    placeholder="Enter plot info"
                                    type='text'
                                    onChange={(e) => setFormData({
                                        ...formdata, address1: {
                                            ...formdata.address1, plotno: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.address1?.plotno}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="street">
                                    Street
                                </Label>
                                <Input
                                    id="street"
                                    name="street"
                                    placeholder="Enter street info"
                                    type='text'
                                    onChange={(e) => setFormData({
                                        ...formdata, address1: {
                                            ...formdata.address1, street: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.address1?.street}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Landmark">
                                    Landmark
                                </Label>
                                <Input
                                    id="Landmark"
                                    name="landmark"
                                    type='text'
                                    onChange={(e) => setFormData({
                                        ...formdata, address1: {
                                            ...formdata.address1, landmark: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.address1?.landmark}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="city">
                                    City
                                </Label>
                                <Input
                                    id="city"
                                    name="city"
                                    placeholder="Enter city"
                                    type='text'
                                    onChange={(e) => setFormData({
                                        ...formdata, address2: {
                                            ...formdata.address2, city: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.address2?.city}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="state">
                                    State
                                </Label>
                                <Input
                                    id="state"
                                    name="state"
                                    placeholder="Enter state"
                                    type='text'
                                    onChange={(e) => setFormData({
                                        ...formdata, address2: {
                                            ...formdata.address2, state: e?.target?.value
                                        }
                                    })}
                                    value={formdata?.address2?.state}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="country">
                                    Country
                                </Label>
                                <Input
                                    id="country"
                                    name="country"
                                    type='text'
                                    onChange={(e) => setFormData({
                                        ...formdata, address2: {
                                            ...formdata.address2, country: e?.target?.value
                                        }
                                    })}
                                    value={formdata.address2.country}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button
                        color='success'
                        onClick={() => addData()}
                    >
                        Sign in
                    </Button>
                </Form>
            </div>
        </>
    )
}

const toDispatchtoProps = (dispatch) => {
    return { add: dispatch }
}

export default connect(null, toDispatchtoProps)(CountDispatch)