import React,{useState} from "react"
import { Card, Row,Col ,Button,Nav, Container} from 'react-bootstrap';
import SidebarHOC from "../../Layout"
import ClientPayment from "./ClientPayment"
import ProductPayment from "./ProductPayment"




function Payments(props){


    const [selected, setSelected] = useState("products");

    return(
        <>
        <Container>
            
          <Nav
           className="mb-3"
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
                <Nav.Link eventKey="clients">Clients</Nav.Link>
              </Nav.Item>
            </Nav>
            {selected === "products" ? (
                
           
                
                <ClientPayment {...props} />
      
                ) : (
                    <ProductPayment {...props} />
                    )}
     
                    </Container>
        </>
    )
}
export default SidebarHOC(Payments)