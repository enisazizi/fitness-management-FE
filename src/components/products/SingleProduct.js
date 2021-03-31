import React from "react"

import { Card, Row,Col ,Button,Nav, Container} from 'react-bootstrap';

function SingleProduct(){


    return(
      


        <Row className="ml-5 mt-5">
            <Col xs={9}> 
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://via.placeholder.com/150" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Edit</Button><Button variant="danger">Delete</Button>
  </Card.Body>
</Card>
            </Col>
</Row>
          
    )
}

export default SingleProduct