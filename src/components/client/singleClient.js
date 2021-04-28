import React from "react";

const SingleClient = (props) => {
  return (
    <div className="container">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Client Name</Card.Title>
          <Card.Text>Any description</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>other info</ListGroupItem>
          <ListGroupItem>Other info</ListGroupItem>
          <ListGroupItem>Other info</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="secondary">Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
