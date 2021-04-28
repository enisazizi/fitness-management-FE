import React, { useState,useEffect } from "react";
import data from "../data"
import { Col, Form,Button, Row ,Image} from "react-bootstrap";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
const Register = (props) => {
    const [company, setCompany] = useRecoilState(data.atoms.Company);
    const [myImg,setMyImg]=useState("https://res.cloudinary.com/dtopnwa0t/image/upload/v1619138116/Fitness/synu4eskzfkanxgyvdjg.png")
  const [formData, setFormData] = useState(null);
const history = useHistory()
  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (!company.auth) return;
    setMyImg("https://res.cloudinary.com/dtopnwa0t/image/upload/v1619139615/Fitness/mucsiqc0sfjyjuhfnghx.png")
    const timer = setTimeout(() => {
       
        history.push("/clients");
      }, 1000)
      return () => clearTimeout(timer);
  }, [company]);
  const handleForm = async (e) => {
    e.preventDefault();
    const response = await data.api.auth.company(formData);
    if (!response) return;
    setCompany({ auth: true, data: response });
  };

      // "https://res.cloudinary.com/dtopnwa0t/image/upload/v1619139615/Fitness/mucsiqc0sfjyjuhfnghx.png"

  return (
   <Row >
     
    
       <Col xs={6} style={{backgroundColor:"black"}}>
       <Image src={myImg} style={{width:'50vw',height:'55vw',overscrollBehavior: 'unset'}} />
       </Col>
       <Col xs={6} className="d-flex justify-content-center" style={{marginTop:'8%'}}>
           <div>

        <h2 className="ml-5 mb-4" style={{fontWeight:'bold',letterSpacing: '5px', color:'#333'}}>LOGIN</h2>
        <Form onSubmit={handleForm}>
        <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  name="email"  onChange={handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"   name="password" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Login
            </Button>
            </Form>
           </div>
       </Col>

   </Row>
  );
};

export default Register;
