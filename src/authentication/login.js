import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import  data  from "../data";
import { Form, Button } from "react-bootstrap";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const Login = ({ history }) => {
  const [company, setCompany] = useRecoilState(data.atoms.Company);
  const [formData, setFormData] = useState(null);

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log(company)
    if (!company.auth) return;
    history.push("/clients");
  }, [company]);
  const handleForm = async (e) => {
    e.preventDefault();
    const response = await data.api.auth.company(formData);
    if (!response) return;
    setCompany({ auth: true, data: response });
  };
  return (
    <div>
      <h3 className="text-center text-white">Welcome Back</h3>
      <Form onSubmit={handleForm} className="text-center">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Username or Email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
