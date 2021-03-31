import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { api } from "../../data/api";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState();
	const [input, setInput] = useState();
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    setFile(formData);
    setInput(URL.createObjectURL(e.target.files[0]));
};
  const addProductFun = async () => {
    let data = { name, description, brand, price };
    const res = await api.addNewProduct(data);

    console.log("what is res ?", res);
  };
  const handleUpload = async (e) => {
    try {
       
      
    } catch (error) {
        console.log("handle upl img err: ", error);
    }
};
  return (
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
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
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
          <Button
						variant='primary'
						onClick={(e) => handleUpload(e)}
						style={{ backgroundColor: "#e647be", border: "none" }}>
						Upload
					</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
export default AddProduct;
