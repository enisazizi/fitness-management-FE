
import React, { useState } from "react"
import { Form, Row,Col ,Button, Container} from 'react-bootstrap';
import SidebarHOC from "../../Layout"
 import {data} from "../../data"
function Clients(){
  const [name ,setName] = useState("")
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [username ,setUsername] = useState("")
  const [payload,setPayload] = useState("")
  const addClientFun = async ()=>{
  let clientData = {name,email,password,payload,username}
    const res = await data.api.addClient(clientData)
   
    // setPayload(document.getElementById("exampleForm.ControlSelect1").value)
    console.log("pay",res)
  }
    return(
        <>
        <Container>

     <Row className="mt-5">
       
            <Col xs={12}>

            
    <Form>
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
      <Form.Control type="email" placeholder="email" onChange={(e) =>
																setEmail(
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
      <Button onClick={()=>addClientFun()}>Add</Button>
    </Form.Group>
    
  
  </Form>
  </Col>
  </Row>
                                </Container>
        </>
    )
}


export default SidebarHOC(Clients)