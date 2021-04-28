import React, { useState,useEffect } from "react";
import { Form, Row, Col, Button,Spinner,Toast } from "react-bootstrap"

import  {api}  from "../../data/api";

function AddProduct() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState();
  const [example,setExample]=useState(false)
  const [toaster,setToaster]=useState(false)
  const [spinn,setSpinn]=useState(false)
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("product", e.target.files[0]);

    setFile(formData);
   
  
};
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}
// useEffect(() => {
//   const timer = setTimeout(() => setExample(true), 3000);
//   return () => clearTimeout(timer);
// }, []);
const handleClick = () => setLoading(true);
  const handleUpload = async (e) => {
    try {
      if(file){
        console.log("hehe")
        const response = await api.addNewProduct({name,description,brand,price})
      
        console.log(file, "responnssssss");
        if (response.status === 201) {
          const res = await api.addProductPhoto(file,response.data)
          console.log("res of img",res.status)
          if(res.status ===201){
            setExample(true)
            const timer1 = setTimeout(() => setSpinn(true) , 500);
           

            const timer2 = setTimeout(() => {
              setSpinn(false)
              setToaster(true)
            }, 1500);
           

            const timer = setTimeout(() => {
              setExample(false)
              setToaster(false)
             
             
            }
             , 3000);
            return () => clearTimeout(timer,timer1,timer2);
          }
        }
      }else{
        console.log("U need a pic")
      }
    } catch (error) {
      console.log("handle upl img err: ", error);
    }
  }
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <>
    {example ?
      (
        <>
      {spinn &&   <div className="d-flex justify-content-center mt-5">

<Spinner animation="border" role="status" style={{width:"120px",height:"120px"}}>
<span className="sr-only">Loading...</span>
</Spinner>

</div>}
      {toaster &&   <div className="d-flex justify-content-center mt-5" >
        <Toast style={{padding:"48px"}}>

      <Toast.Body> <strong style={{ fontSize: 'large'}} className="d-flex justify-content-center">Product Added</strong></Toast.Body>
      </Toast>
        </div>}
        </>
      )
      :
      (
        <Row>
      <Col xs={2}></Col>
      <Col xs={8}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <label
								id='select-to-upload-btn'
								className='d-flex justify-content-center py-1 my-1 mt-2 '>
								<i class='fas fa-image my-post-i d-flex justify-content-center align-items-center'></i>
								<input
									className='file-upload'
									type='file'
									multiple
									onChange={(e) => handleFile(e)}
								/>
							</label>
                      
          <Form.Group controlId="exampleForm.ControlSelect1">
          {/* <Button
						variant='primary'
						onClick={(e) => handleUpload(e)}
						style={{ backgroundColor: "#e647be", border: "none" }}>
						Upload
					</Button> */}
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? (e) =>{ handleUpload(e) ; handleClick()} : null}
          >
            {isLoading ? 'Loading…' : 'Upload'}
          </Button>
        
          </Form.Group>
        </Form>
      </Col>
    </Row>
      )
    }
  
    </>
  );
}
export default AddProduct;
