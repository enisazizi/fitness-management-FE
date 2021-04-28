import React, { useEffect, useState } from "react"
import {Form,Button, Container} from "react-bootstrap"
import SidebarHOC from "../../Layout"
import {api} from "../../data/api"
import { useHistory,useParams } from "react-router-dom"
function EditProduct({props}){
  const history = useHistory()
  const [info,setInfo] = useState()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState();
  
  let { productId } = useParams();
    
    const handleFile = (e) => {
      const formData = new FormData();
      formData.append("product", e.target.files[0]);
      console.log(formData)
      setFile(formData);
      
  };
  
  const handleUpload = async (e) => {
    try {
      if(file){
        const response = await api.editProduct(file,productId)
        console.log("res of img",response)
        
      
        console.log(file, "responnssssss");
        if (response.status === 201) {
          const res = await api.editProduct({name,description,brand,price},productId)
          if(res.status=201){
            history.push("/products")
          }
        }
      }else{
        console.log("U need a pic")
      }
    } catch (error) {
      console.log("handle upl img err: ", error);
    }
  }
  useEffect(async()=>{
     const res = await api.getProduct(productId)
    console.log("hehehe",props)
    console.log("heheh2",productId)
     setInfo(res)
     console.log("info",res)
  },[])
    return(
        <>
        {info &&
        
    <Container>

  
         <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              placeholder={info.name}
              className="name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder={info.description}
              />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="brand"
              placeholder={info.brand}
              onChange={(e) => setBrand(e.target.value)}
              />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="number"
              placeholder={`${info.price} euro`}
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
						Save Changes
					</Button>
          </Form.Group>
        </Form>
       
        
     
              </Container>
        }
      </>
    )
}

export default SidebarHOC(EditProduct)