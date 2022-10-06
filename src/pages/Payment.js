import BaseUD from "../components/BaseUD";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import card from "./card.jpg";


function Payment() {
  const[user, setUser]=useState({
    
    number:"",
    name:"",
    date:"",
    year:"",
    cvv:""
});

  const navigate=useNavigate();
  
  console.warn(user)
  
  // function redirectp()
  // {
    
  //   navigate('/Acceptlist')
  //   toast.success("Payment Done Successfuly")
  // }
  const handleChange = (e) =>{
    const value = e.target.value;
    setUser({...user,[e.target.name]: value})
}
  const insertAction = async (e) => {
    await axios.post(
      "http://localhost:8080/api/payment/save",
      user
    ).then(
      (response) => {
          
          console.log(response);
        if(user.number===""||user.name===""||user.date===""||
        user.year===""||
        user.code===""
       ){
            toast("Please fill the details to go forward!!")
        }else if( response.status==200){
            navigate('/Acceptlist')
            toast.success("Payment Done Successfuly")
        }

      });
    };







    return (


        <div style={{
        
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:750
        
        }}>
        
        <BaseUD>
        <Container>
        
        <Row className="mt-4">
        
                {/* {JSON.stringify(data)} */}
        
        
                <Col  sm={{size:6,offset:3}}>
                <Card color="secondary" >
                <CardHeader>
        
        <h3>Fill The Card Details</h3>   
        
        <img src = {card}></img>


        
        
        </CardHeader>
           
        <CardBody>
            <Container>
            <Form>
            <FormGroup> 
           <Col >
           
               <Input type="int" name="number" id="number" placeholder="Enter Card Number"
                value={user.number} 

                onChange={(e) => handleChange(e)}
            //    required  value={register.username} 
            //    onChange={(e) => changeDetails(e)}
              />
              </Col>
              </FormGroup>
              </Form>
              </Container>
              <Container>
              <Form>
              <FormGroup>
                <Col >
               <Input type="text" name="name" id="name" required placeholder="Enter Card Holder Name" 
                               value={user.name} 

                               onChange={(e) => handleChange(e)}
        
              //  value={email}
              //  onChange={emailValidation}
               />
                </Col>
                </FormGroup>
                </Form>
                </Container>
              
              {/* <div className="col-3">
                      <label for="password">Password : </label>
                    </div>
                    <div className="col-9">
                      <input type="password" name="password" id="loginPassword" value={register.password}  {...register1("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })} placeholder="Your password.."  onChange={(e) => changeDetails(e)}/>
                      {errors.password && <p className="error">Please enter valid Password !</p>}
                    </div> */}
           
        <Container >
             <Form>
             <FormGroup>
             <Col xs={8}>
                <Input
                  type="int"
                  name="date"
                  id="date"
                  value={user.date} 

                  onChange={(e) => handleChange(e)}
                  placeholder="Expiration Date"
                  required
                />
                </Col>
               

                </FormGroup>
                </Form>
        </Container>
        <Container >
             <Form>
             <FormGroup>
             <Col xs={8}>
                <Input
                  type="int"
                  name="year"
                  id="year"
                  placeholder="Expiration Year"
                  value={user.year} 

                  onChange={(e) => handleChange(e)}
                  required
                />
                </Col>
                
                </FormGroup>
                </Form>
        </Container>
        <Container >
             <Form>
             <FormGroup>
             <Col xs={4}>
                <Input
                  type="int"
                  name="code"
                  id="code"
                  placeholder="CVV(Security Code)"
                  value={user.code} 

                  onChange={(e) => handleChange(e)}
                  required
                />
                </Col>
                
                </FormGroup>
                </Form>
        </Container>
             <Container className="text-center">
        
     <Button onClick={e => insertAction(e)} color="dark">Confirm</Button> 
        
              </Container>
          
            </CardBody>
        </Card>
        
        </Col>
        </Row>
          </Container>
          </BaseUD>
        </div>
        
          );
        }
        export default Payment;
        
        
        