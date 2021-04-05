import React, { useEffect, useState } from "react"
import {data} from "../../data"
import { Card, Row,Col ,Button,Nav, Container} from 'react-bootstrap';

function SingleProduct(){
 const [productsData,setProductsData] = useState()
  useEffect( async () => {
    const response = await data.api.getAllProducts();
    setProductsData(response)
    console.log("Hello",response)
    console.log("Hello",productsData)
  }, [])
    return(
      
      

        <Row className="ml-5 mt-5">
            <Col xs={9}> 
            { productsData && productsData.length > 0 ?(  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={productsData[0].image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Edit</Button><Button variant="danger">Delete</Button>
  </Card.Body>
</Card>):
(<div>dasdsdas</div>)} 
      
            </Col>
</Row>
          
    )
}

export default SingleProduct