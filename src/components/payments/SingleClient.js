import React,{useState} from "react"
import {GiReceiveMoney} from 'react-icons/gi'
import {data} from "../../data"
import {Modal,Button,Form,Spinner,Toast} from 'react-bootstrap'

function SingleClient(props){
    const [show, setShow] = useState(false);
    const [payload,setPayload] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addPay = async (id)=>{
      try {
        setShow(false)
        console.log("hehe",payload)
        const res = await data.api.makePayment(id,{payload})
      } catch (error) {
        console.log(error)
      }
    }
    return(
            <>
                   <tr>
                  <td style={{ width: "20px" }}>{props.index+1}</td>
                  <td>{props.data.name}</td>
                  <td>{props.data.surname}</td>
                  <td>{props.data.username}</td>
                  <td  onClick={handleShow}><GiReceiveMoney /></td>
                </tr>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Payment</Modal.Title>
        </Modal.Header>
        <Form.Group controlId="exampleForm.ControlSelect1">
     
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
    </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addPay(props.data._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                </>
              
    )
}

export default SingleClient