import React, {useState,useEffect} from "react"
import {api} from "../../data/api"
import SingleClient from "./SingleClient"
import { Table } from "react-bootstrap";

function ClientPayment(){


    let [clients, setClients] = useState([]);
    let [searchValue, setSearchValue] = useState("");
    let [filteredClients, setFilteredClients] = useState([]);

    const getClient = async () => {
        const response = await api.getClients()
        console.log(response,"hehe")
        setClients(response)
    
        
      };
      useEffect(() => getClient(), []);

      const filterUsers = () => {
          let result = clients.filter(client => client.name.includes(searchValue))
          console.log('filtered result: ', result)
          setFilteredClients(result);
          return result;
      }
    
      useEffect(()=>{
        filterUsers();
        console.log(searchValue,"hehe")
    }, [searchValue]);

    return(
        <>
<input type="text"
 placeholder="Search…" 
  className="form-control ds-input"
   autocomplete="off" 
   spellcheck="false"
    role="combobox"
     aria-autocomplete="list" 
     aria-expanded="false" 
     aria-label="search input" 
     aria-owns="algolia-autocomplete-listbox-0" 
     dir="auto" 
      onChange={(e) => setSearchValue(e.target.value)} />
    {searchValue==="" ?
    
    (
        <Table striped bordered hover variant="dark">

        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th style={{ width: "25px" }}>Make Payment</th>
        </tr>
      </thead>
      <tbody>

   { clients.map((client,index)=>{
        return <SingleClient data={client} index={index}/>
    })}
    </tbody>
       </Table>
    )
    :
    (
        <Table striped bordered hover variant="dark">

        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Make Payment</th>
        </tr>
      </thead>
      <tbody>
   { filteredClients.map((client,index)=>{
        return <SingleClient data={client} index={index}/>
    })}
    </tbody>
       </Table>
    )
    }
      </>
    )
}

export default ClientPayment