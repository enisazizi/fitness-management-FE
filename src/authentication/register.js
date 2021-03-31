import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Form, Col, Button } from "react-bootstrap";
import { data } from "../data";
import {validateEmail,validatePassword} from '../utilities/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [client, setClient] = useRecoilState(data.atoms.client);
  const [valid, setValid] = useState({
    strong: false,
    match: false,
    email: false,
  });
  const [formData, setFormData] = useState(null);

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
    if (name === "password") {
      setValid({ ...valid, strong: validatePassword(value) });
    }
    if (name === "email") {
      setValid({ ...valid, email: validateEmail(value) });
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const response = await data.api.addClient(formData);
    if (!response) return;
    setClient({ auth: true, data: response });
  };

  return (
    <div>
      <h3 className="text-center text-white"> Welcome, Please Register</h3>
      <Form onSubmit={handleForm}>
        <Form.Row className="my-3">
          <Col>
            <Form.Control
              placeholder="First name"
              name="name"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              name="surname"
              onChange={handleChange}
            />
          </Col>
        </Form.Row>
        <Form.Row className="my-3">
          <Col>
            <Form.Control
              isValid={valid.email}
              isInvalid={!valid.email}
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </Col>
        </Form.Row>
        <Form.Row className="my-3">
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              isValid={valid.strong}
              isInvalid={!valid.strong}
              name="password"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              isInvalid={!valid.match}
              isValid={valid.match}
              onChange={({ target: { value } }) => {
                if (value === formData.password) {
                  setValid({ ...valid, match: true });
                }
              }}
            />
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Button
            variant="primary"
            type="submit"
            disabled={valid.email && valid.strong && valid.match ? false : true}
          >
            Submit
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};
