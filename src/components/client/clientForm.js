import React, { useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import client from ".";
import {api} from "../../data/api"
const ClientForm = () => {
  const [name ,setName] = useState("")
  const [surname ,setSurname] = useState("")
  const [password ,setPassword] = useState("")
  const [username ,setUsername] = useState("")
  const [payload,setPayload] = useState("")
  const addClientFun = async ()=>{
  let clientData = {name,surname,password,payload,username}
    const res = await api.addClient(clientData)
   
    // setPayload(document.getElementById("exampleForm.ControlSelect1").value)
    console.log("pay",res)
  }
  return (
    <div className="container-fluid">
      <div className="row row-cols-2">
        <div className="col text-center">
          <div>
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e1TpSljSYrLgnE6Ui9HFq7eLnihrbqi6aTIr3XhPafD6LrfgyD1zfuJHqQvMB40UOeE&usqp=CAU"
            />
          </div>

          <Button variant="secondary">Select Image</Button>
        </div>
        <div className="col">
        <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="name" onChange={(e) =>
																setName(
																	e.target
																		.value
																)
															}
															value={name}
															
															className='name' />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="text" placeholder="surname" onChange={(e) =>
																setSurname(
																	e.target
																		.value
                                    )
															} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="username" onChange={(e) =>
																setUsername(
                                  e.target
																		.value
																)
															} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Password</Form.Label>
      <Form.Control type="text" placeholder="password"onChange={(e) =>
																setPassword(
                                  e.target
                                  .value
                                  )
															} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Payment</Form.Label>
      <Form.Control as="select"  onChange={(e) =>
																setPayload(document.getElementById("exampleForm.ControlSelect1").value)
															}>
       <option value="31 days">Select</option>
        <option value="31 days">1 month</option>
        <option value="61 days">2 month</option>
        <option value="92 days">3 month</option>
        <option value="184 days">6 month</option>
        <option value="365 days">1 year</option>
      </Form.Control>
      <Button style={{marginTop:'5px'}} onClick={()=>addClientFun()}>Add</Button>
    </Form.Group>
    
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
