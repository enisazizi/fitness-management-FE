import React, { useState,useEffect } from "react"
import { Card, Row,Col ,Button,Nav, Container} from 'react-bootstrap';
import SidebarHOC from "../../Layout"
import AddProduct from "./AddProduct";
import SingleProduct from "./SingleProduct";

function Products(props){

  const [selected, setSelected] = useState("products");
 

    return(
        <>
  
         
        <div className="row justify-content-center ">
          <div className="col-12 d-flex justify-content-center ml-5">
            <Nav
              variant="tabs"
              onSelect={(selected) => {
                setSelected(selected);
              }}
              defaultActiveKey="/products"
            >
            
              <Nav.Item>
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="addproduct">Add Product</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        {selected === "products" ? (
         
           
         
           <SingleProduct {...props} />
        
            ) : (
              <AddProduct {...props} />
            )}
       
    
        </>
    )
}

export default SidebarHOC(Products)