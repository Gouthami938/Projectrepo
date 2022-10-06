import React,{useState} from "react";
import {toast} from "react-toastify";
import BaseUD from "../components/BaseUD";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody, Label} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserDetails=()=>{
    const[user, setUser]=useState({
    
        name:"",
        date:"",
        place:"",
        hobbies:"",
        gender:""
    });

    const navigate=useNavigate();

    const [errorMessages, setErrorMessages] = useState({});

    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user,[e.target.name]: value})
    }

    const errors = {
        pass: "invalid username/password"
      };
    const insertAction = async (e) => {
        await axios.post(
          "http://localhost:8080/api/user/save",
          user
        ).then(
          (response) => {
              
              console.log(response);
            if(user.name===""||user.date===""||
            user.place===""||
            user.hobbies===""
           ){
                toast("Please fill the details to go forward!!")
            }else if( response.status==200){
                navigate('/SubmittedForm')
                toast.success("Details Submited")
            }
                
            



            //   if (response.status==200) {
            //       console.log("navigating");
            //       navigate('/Payment')
            //       //setIsSubmitted(true);
            //       toast.success("Details Submited")
            //   } 
            //   },(error) => {
            //     setErrorMessages({ name: "pass", message: errors.pass });
          });
      };



return(


<div style={{

backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

}}>

       <BaseUD>
        
        <Container>

        <Row className="mt-4">
        <Col sm={{size:6,offset:3}} >
            
        <Card color="secondary">

        <CardHeader>

        <h3>TELL US MORE ABOUT YOURSELF</h3>
        </CardHeader>
      <CardBody>


      
        
         {/*  Field*/}
         <Form>
            <FormGroup>
            <Input type="text"
            placeholder="Enter Name"
            name="name"
            id="username"
            value={user.name} 

            onChange={(e) => handleChange(e)}
            ></Input>
            </FormGroup>
            </Form>


            {/* <Input type="text" name="username" id="loginUser" placeholder="Enter Name"
       required  value={register.username} 
       onChange={(e) => changeDetails(e)} */}





            <Form>
         {/* dob Field*/}

            <FormGroup>
            <Input type="date"
            name="date"
            placeholder="Enter Date of birth"
            value={user.date} 
            onChange={(e) => handleChange(e)}
           

            ></Input>
            </FormGroup>
            </Form>
            <Form>
         {/* Place Field*/}

            <FormGroup>
            <Input type="text"
            name="place"
            placeholder="Enter Place"
        
            value={user.place} 
            onChange={(e) => handleChange(e)}

            ></Input>
            </FormGroup>
            </Form>

             <Form>
            {/* Age Field*/}

             <FormGroup>
            <Input type="integer"
            name="age"
            id="age"
            placeholder="Enter Age"
            value={user.age} 
            onChange={(e) => handleChange(e)}
           

            ></Input>
            </FormGroup>
            </Form>  

            <Form>
            {/* Hobbies Field*/}

            <FormGroup>
            <Input type="text"
            name="hobbies"
            placeholder="Enter Hobbies"
            value={user.hobbies} 
            onChange={(e) => handleChange(e)}
           

            ></Input>
            </FormGroup>
            </Form>

            <Form>
            {/* Hobbies Field*/}

            <FormGroup>
            <Input type="text"
            name="image"
            placeholder="Enter Img"
            value={user.image} 
            onChange={(e) => handleChange(e)}
           

            ></Input>
            </FormGroup>
            </Form>
             Gender
        
            <Form>
            <FormGroup>
              <Label >Male</Label>
            <Input type="radio"
            name="Gender"
            value={user.gender}
            id="flexRadioDefault"

            onChange={(e) => handleChange(e)}
            ></Input>
             <Label >Female</Label>
        <Input type="radio"
        name="Gender"
        value={user.gender}
        id="flexRadioDefault"

        onChange={(e) => handleChange(e)}
       

        ></Input>
            </FormGroup>
            </Form> 
        
       
         
 




            <Container  className="text-center">

            <Button  onClick={e => insertAction(e)} color="dark">Submit</Button>

            </Container>

            </CardBody>
        </Card>
        </Col>
        </Row>
    </Container>
       </BaseUD>
       </div>
)
};

      export default UserDetails;





