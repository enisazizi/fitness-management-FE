import React, { useState } from "react";
import data from "../../data";
import { Modal, Form } from "react-bootstrap";

export default ({ show, onHide, currentClient }) => {
  const [client, setClient] = useState({ name: "", password: "", endDate: "" });

  const handleChange = ({ target: { value, id } }) => {
    setClient({ ...client, [id]: value });
  };
  const editClient = async () => {
    console.log(client);
    let newClient = await data.api.client.editClient(client);
    alert(`Client Edited : ${client.name}`);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{"Edit Client"}</Modal.Title>
      </Modal.Header>
      {currentClient ? (
        <Modal.Body>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="name"
              size="sm"
              type="text"
              placeholder={currentClient.name}
            />
            <br />
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="password"
              size="sm"
              type="password"
              placeholder="Password"
            />
            <br />
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="username"
              size="sm"
              type="text"
              placeholder={currentClient.username}
            />
            <br />
            <Form.Label>Valid until:</Form.Label>
            <input
              onSelect={handleChange}
              type="date"
              id="endDate"
              name="trip-start"
              defaultValue="2018-07-22"
            />
            <br />
            <button
              className="btn btn-primary mt-3"
              disabled={
                client.name.length > 0 &&
                client.password.length > 0 &&
                client.endDate.length > 0 &&
                client.username.length > 0
                  ? false
                  : true
              }
              onClick={() => editClient()}
            >
              Save
            </button>
          </Form.Group>
        </Modal.Body>
      ) : (
        "wrong"
      )}
    </Modal>
  );
};
