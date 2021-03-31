import React from "react";
import "./sidebar.css";
import { Form, Row,Col ,Button} from 'react-bootstrap';
import SidebarOption from "../sidebaroptions/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";


import { useHistory } from "react-router-dom";
import Clients from "../clients/Clients"
function Sidebar() {
    const history = useHistory();

    const changePage = (url)=>{
       
        console.log("hehe")
      history.push(`/${url}`)
    }

  return (
    <Row className="d-inline-flex">
      <Col xs={2}>

      <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoVDg7sNEAkLBjU0JTAzgkPcrzCkyjesO_9iaSUp9hbrv5pKS2pfl_41JeSFREZ3rXTU&usqp=CAU"
          alt="Spotify logo"
        />
          <div onClick={()=>changePage("Home")}><SidebarOption  title="Home" Icon={HomeIcon} /></div>
          <div onClick={()=>changePage("Clients")}><SidebarOption  title="Clients" Icon={HomeIcon} /></div>
          <div onClick={()=>changePage("Products")}><SidebarOption  title="Products" Icon={HomeIcon} /></div>
          <div onClick={()=>changePage("Activity")}><SidebarOption  title="Activity" Icon={HomeIcon} /></div>

      </div>
      </Col>
     
    
    </Row>
  );
}
export default Sidebar;