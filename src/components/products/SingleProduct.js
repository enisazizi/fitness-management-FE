import React, { useEffect, useState } from "react"
import {api} from "../../data/api"
import { Card, Row,Col ,Button,Modal, Form} from 'react-bootstrap';

import { useHistory } from "react-router-dom";
function SingleProduct(){
  const history = useHistory()
  
 const [productsData,setProductsData] = useState()
 const [refresh,setRefresh] = useState(false)


  useEffect( async () => {
    const response = await api.getAllProducts()
    
    setProductsData(response)
    console.log("Hello",response)
    console.log("Hello",productsData)
  }, [refresh])
const deletedProduct = async(id)=>{
  const res = await api.deleteProduct(id)
  if(res.status ===204){
    setRefresh(!refresh)
  }
}

    return(
      
      

        <Row className="ml-5 mt-5">
            { productsData && productsData.length > 0 ?(productsData.map((element)=>{
              return(
                <Col xs={3} className="mb-3"> 
                <Card style={{ width: '18rem' ,height:"26rem"}}>
  <Card.Img variant="top" src={element.image} className="pl-3 mt-2" style={{width:'14rem',height:'12rem', objectFit:"cover"}}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
  <div>  {element.description}</div>
    {element.price} <b>Euro</b>
    </Card.Text> 
  
    <Button variant="outline-info" className="px-3 "  onClick={()=>history.push(`/product/${element._id}`)}>Edit</Button><Button variant="outline-danger" onClick={(e)=>deletedProduct(element._id)}>Delete</Button>
  </Card.Body>
</Card>
  
        </Col>
              )
            }))
:
(<div></div>)} 
</Row>
          
    )
}

export default SingleProduct