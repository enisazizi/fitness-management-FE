import React from "react";
import { Nav, Button, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const history = useHistory()
  function handleClick(param) {
    console.log("hehe")
    history.push(`/${param}`)
  }
  return (
    <div style={{ height: "100vh" }} className="container-fluid sticky-top">
      <div className="row row-cols-1 h-100">
        <div className="col">
          <img
            className="img-fluid rounded-circle mt-5  "
            src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg"
            alt=""
          />
          <ListGroup className="mt-5 text-center px-3">
            <ListGroup.Item className=" h4 rounded " onClick={()=>handleClick("activity")} style={{ height: "50px" }}>
              Activity
            </ListGroup.Item>
            <ListGroup.Item className=" h4 rounded "  onClick={()=>handleClick("clients")} style={{ height: "50px" }}>
              Clients
            </ListGroup.Item>
            <ListGroup.Item className=" h4 rounded "  onClick={()=>handleClick("products")} style={{ height: "50px" }}>
              Products
            </ListGroup.Item>
            <ListGroup.Item className=" h4 rounded "  onClick={()=>handleClick("payments")} style={{ height: "50px" }}>
              Payments
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col mt-auto">
          <Button variant="secondary w-100 mb-3">Log out</Button>
        </div>
      </div>
    </div>
  );
};
