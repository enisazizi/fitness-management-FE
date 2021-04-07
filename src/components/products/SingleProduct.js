import React, { useEffect, useState } from "react"
import {data} from "../../data"
import { Card, Row,Col ,Button,Modal, Form} from 'react-bootstrap';
import EditProduct from "./EditProduct"
import { useHistory } from "react-router";
function SingleProduct(){
  const history = useHistory()
 const [productsData,setProductsData] = useState()
 const [refresh,setRefresh] = useState(false)


  useEffect( async () => {
    const response = await data.api.getAllProducts();
    setProductsData(response)
    console.log("Hello",response)
    console.log("Hello",productsData)
  }, [refresh])
const deletedProduct = async(id)=>{
  const res = await data.api.deleteProduct(id)
  if(res.status ===204){
    setRefresh(!refresh)
  }
}

    return(
      
      

        <Row className="ml-5 mt-5">
            <Col xs={9}> 
            { productsData && productsData.length > 0 ?(productsData.map((element)=>{
              return(
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={element.image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> 
    <Button variant="primary"  onClick={()=>history.push(`/${element._id}`)}>Edit</Button><Button variant="danger" onClick={(e)=>deletedProduct(element._id)}>Delete</Button>
   

  </Card.Body>
</Card>
              )
            }))
:
(<div></div>)} 
      
            </Col>
</Row>
          
    )
}

export default SingleProduct