import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "./clientModal";

export default ({ client,show, setShow }) => {
  return (
    <>
      <Card style={{ maxWidth: "15rem" }}>
        <Card.Img
          variant="top"
          src={
            client.img
              ? client.img
              : "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171147553/90450638-client-member-icon-isolated-on-yellow-round-button-abstract-illustration.jpg"
          }
        />
        <Card.Body className="text-left">
          <Card.Title>{client.name}</Card.Title>
          <h5>{client.username}</h5>
          <h5>Valid untill : 2021/07/25</h5>

          <Button
            variant="primary"
            onClick={() => {
              setShow(true);
            }}
          >
            Edit
          </Button>

        </Card.Body>
      </Card>
      <Modal show={show} onHide={setShow} currentClient={client} />
    </>
  );
};
