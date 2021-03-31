import React, { useState } from "react";
import { Login, Register } from "../../authentication";
import { Nav } from "react-bootstrap";

const Landing = (props) => {
  const [selected, setSelected] = useState("login");
  return (
    <div
      className="container-fluid p-5 d-flex justify-content-center "
      style={{
        height: "100vh",
        backgroundImage: `url('https://st2.depositphotos.com/3927429/8181/i/600/depositphotos_81815074-stock-photo-athletic-man-and-woman-after.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="container m-5">
        <div className="row justify-content-center ">
          <div className="col-12 d-flex justify-content-center">
            <Nav
              variant="pills"
              onSelect={(selected) => {
                setSelected(selected);
              }}
              defaultActiveKey="/"
            >
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register">Register</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div className="row h-100 w-100 justify-content-center mt-5">
          <div className="col-5">
            {selected === "login" ? (
              <Login {...props} />
            ) : (
              <Register {...props} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
