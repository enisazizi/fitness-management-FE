import React, { useState,useEffect } from "react"
import { Card, Row,Col ,Button,Nav, Container} from 'react-bootstrap';
import {api} from "../../data/api"
import AddProduct from "./AddProduct";
import SingleProduct from "./SingleProduct";

function Products(props){

  const [selected, setSelected] = useState("products");
    // useEffect(async ()=>{
    //     const res = await api.getAllProducts()
    //     setProducts(res)
    //     console.log(res)
    // },[])

    return(
        <>
  
         
        <div className="row justify-content-center ">
          <div className="col-12 d-flex justify-content-center ml-5">
            <Nav
              variant="pills"
              onSelect={(selected) => {
                setSelected(selected);
              }}
              defaultActiveKey="/"
            >
              <Nav.Item>
                <Nav.Link eventKey="products">Add Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="addproduct">Products</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        {selected === "products" ? (
           <div className="row  mt-5">
           <div className="col-5">
           
           <AddProduct {...props} />
           </div>
         </div>
            ) : (
              <SingleProduct {...props} />
            )}
       
    
        </>
    )
}

export default Products