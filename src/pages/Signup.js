import React , {useState }from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
import Base from "../components/Base";
import {Form} from "reactstrap";
import {Row} from "reactstrap";
import {Col} from "reactstrap";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




function Register() {
//  const { register1, handleSubmit, formState: { errors } } = useForm();
 const navigate=useNavigate();
 const [errorMessages, setErrorMessages] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [formErrors, setFormErrors] = useState({});
 const [username,setUserName] = useState("");
   const [password,setPassword] = useState("");
   const [email,setEmail] = useState("");

   const errors = {
     pass: "invalid password",
     noerr: ""
   };
  

 const data={
   "username":username,
   "password":password
 };


 const Validate = (values) => {
   const error = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if (!values.username) {
     error.username = "Username is required!";
   }else if(values.username.length<5){
    error.username="Username must be more than 5 characters"
   }
   if (!email) {
     error.email = "Email is required!";
   } else if (!regex.test(email)) {
     error.email = "This is not a valid email format!";
   }
   if (!values.password) {
     error.password = "Password is required";
   } else if (values.password.length < 4) {
     error.password = "Password must be more than 4 characters";
   } else if (values.password.length > 10) {
     error.password = "Password cannot exceed more than 10 characters";
   }
   return error;
 };

 const onInputChangeUsername = event => {
   setUserName(event.target.value)
}

const onInputChangePassword = event => {
   setPassword(event.target.value)
}
const onInputChangeEmail= event => {
 setEmail(event.target.value)
}

const onChangePassword = event => {
 let value=event.target.value;
 if(value!=password){
 
    setErrorMessages({ name: "pass", message: errors.pass });
 }
 else{
   setErrorMessages({name: "noerr",message: errors.noerr})
 }
}
const insertAction= async(e)=>{   
  e.preventDefault();
  if(!data.username || !data.password || !email||data.password.length < 4 || data.password.length > 10 ){ 
  setFormErrors(Validate(data));}
 else{
 await axios.post('http://localhost:8080/api/auth/signup',data).then(
  (response) => { 
      console.log(response);
      if (response.status==200) {
        setIsSubmitted(true);
          toast.success("Registration successful"); 
      }
  }, (error) => {
    toast("Operation failed");
  }
);
 }
  
   };

   const renderErrorMessage = (name) =>
  name!=password && (
    <div className="error">{errorMessages.message}</div>
  ) ;

  // const [register, setRegister] = useState([
  //   {
  //     username: "",
  //     password: "",
  //   },
  // ]);

// const [email,setEmail]=useState("");
// const [message,setMessage]=useState("");
// const emailValidation=()=>{
//   const regEx=/[a-zA-Z0-9._/%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
//   if(regEx.test(email)){
//     setMessage("Email is valid");
//   }else if(!regEx.test(email)&&email!=""){
//     setMessage("Email is not valid");
//   }else{
//     setMessage("");
//   }
// }




  // function changeDetails(e) {
  //   let value = e.target.value;

  //   setRegister({ ...register, [e.target.name]: value });
  // }

const renderForm=(<div className="register-wrapper">
  
  
<div style={{

backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

}}>

<Base>
<Container>

<Row className="mt-4">

        {/* {JSON.stringify(data)} */}


        <Col  sm={{size:6,offset:3}}>
        <Card color="secondary" >
        <CardHeader>

<h3>Fill Information to Register</h3>   


</CardHeader>
   
<CardBody>
    <Form>
    <FormGroup> 
   
       <Input type="text" name="username" id="username" placeholder="Enter Name"
         value={username} 
       onChange={(e) => onInputChangeUsername(e)}
       required
      />
      {formErrors.username}
      </FormGroup>
      </Form>
      <Form>
      <FormGroup>
       <Input type="text" name="email" id="email"  placeholder="Enter Email" 
      //  value={email}
      //  onChange={emailValidation}
      onChange={(e) => onInputChangeEmail(e)} 
      required
       />
       {formErrors.email}

        
        </FormGroup>
        </Form>
        <Form>
        <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          
          value={password}
       onChange={(e) => onInputChangePassword(e)} required
        />
        {formErrors.password}
        </FormGroup>
        </Form>

     <Form>
     <FormGroup>
        <Input
          type="password"
          name="retypepassword"
          id="retypepassword"
          placeholder="Retype Password"
        
          onChange={(e) => onChangePassword(e)}
          
          required
        />
        {renderErrorMessage("retypepassword")}
        </FormGroup>
        </Form>

     <Container className="text-center">

<Button  onClick={e => insertAction(e)} color="dark">Register</Button>

      </Container>
  
    </CardBody>
</Card>

</Col>
</Row>
  </Container>
  </Base>
</div>
  </div>
  )







  // const insertAction = async (e) => {
  //   await axios.post(
  //     e.preventDefault();
  //     if(!data.username || !data.password || !email||data.password.length < 4 || data.password.length > 10 ){ 
  //     setFormErrors(Validate(data));}
  //    else{
  //     await axios.post('http://localhost:8080/api/auth/signup',data).then(
  //   (response) => { 
  //       console.log(response);
  //       if (response.status==200) {
  //         setIsSubmitted(true);
  //           alert("Registration successful"); 
  //       }
  //   }, (error) => {
  //     alert("Operation failed");
  //   }
  //     );
    //   "http://localhost:8080/api/auth/signup",
    //   register
    // ).then(
    //   (response) => {
          
    //       console.log(response);
    //       if (response.status==200) {
    //           console.log("navigating");
    //           navigate('/Login')
    //           //setIsSubmitted(true);
    //           toast.success("Registration successfull")
    //       }
    //   });
   
  return (

    <div>
  
    {isSubmitted ? navigate("/Login") : renderForm}
   
    </div>


  );
}
export default Register;

























// import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
// import Base from "../components/Base";
// import {Form} from "reactstrap";
// import {Row} from "reactstrap";
// import {Col} from "reactstrap";
// // import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
// import { toast } from 'react-toastify';
// import React , {useState }from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// //import './Login.css';

// const Signup=()=>{
//  const { register1, handleSubmit, formState: { errors } } = useForm();
//   const [register, setRegister] = useState([
//     {
//       username: "",
//       password: "",
//     },
//   ]);

//   function changeDetails(e) {
//     let value = e.target.value;

//     setRegister({ ...register, [e.target.name]: value });
//   }

//   const insertAction = async (e) => {
//     await axios.post(
//       "http://localhost:8080/api/auth/signup",
//       register
//     ).then(
//       (response) => {
          
//           console.log(response);
//           if (response.status==200) {
//               console.log("navigating");
//               //setIsSubmitted(true);
//               toast.success("Registration successfull")
//           }
//       });
//   };




// // import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
// // import Base from "../components/Base";
// // import {Form} from "reactstrap";
// // import {Row} from "reactstrap";
// // import {Col} from "reactstrap";
// // import { useEffect, useState } from "react";
// // import { json } from "react-router-dom";
// // import { signUp } from "../services/user-service";
// // import { toast } from 'react-toastify';


// // const Signup=()=>{

// //    const[data,setData]=useState({
   
// //     username:'',
// //     password:''
// // })

// //     const [error,setError]=useState({
// //     errors:{},
// //     isError:false

// //     })



   

// // //handlechange

// // const handleChange=(event,property)=>{
// //    setData({...data,[property]:event.target.value})


// //    console.log(data)

// // }

// // //submit the form
// // const submitForm=(event)=>{
// //     event.preventDefault()

// //     console.log(data);
// // //data validate


// // //server api for sending data
// // signUp(data).then((resp)=>{
// // console.log(resp)
// // console.log("success log")
// // toast.success("User is registered successfully")
// // setData({
// //     username:'',
// //     password:''
// // })
// // }).catch((error)=>{
// //     console.log(error)
// //     console.log("Error log")
// //     toast.success("User not registered")

// // })





// // }








//     return(

// <div style={{

// backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

// }}>

//        <Base>
//        <Container>
//       <Row className="mt-4">

//         {/* {JSON.stringify(data)} */}


//         <Col  sm={{size:6,offset:3}}>
//         <Card color="secondary" >

// <CardHeader>

// <h3>Fill Information to Register</h3>   


// </CardHeader>

// <CardBody>





// {/* Name filed 
// <Form onSubmit={submitForm}>
//      <FormGroup> 
        
//         <Input
//         type="text"
//         placeholder="Enter FirstName"
//         id="firstname"
//         onChange={(e)=>handleChange(e,'firstname')}
//         value={data.firstname}
//         />
//     </FormGroup>
//     </Form>
//     <Form>
//      <FormGroup> 
        
//         <Input
//         type="text"
//         placeholder="Enter LastName"
//         id="lastname"
//         onChange={(e)=>handleChange(e,'lastname')}
//         value={data.lastname}
//         />
//     </FormGroup>

//     </Form>
//  {/* Email filed  */}
//  <Form action="">
//  <FormGroup>  

// <Input
// type="text"
// placeholder="Enter Username"
// id="username"
// value={register.username} 
//        onChange={(e) => changeDetails(e)}
// // onChange={(e)=>handleChange(e,'username')}
// // value={data.username}
// />
// </FormGroup>
// </Form>
// {/* Password filed  */}
// <Form>
// <FormGroup> 
// <Input
// type="password"
// placeholder="Enter Password"
// id="password"
// value={register.password} 
//        onChange={(e) => changeDetails(e)}
// // onChange={(e)=>handleChange(e,'password')}
// // value={data.password}
// />
// </FormGroup>
// </Form>
// <Container className="text-center">
// <Button onClick={(e) => insertAction(e)} color="dark">Register </Button>
// {/* <Button color="light" type="reset" className="ms-2">Reset</Button> */}
// </Container>

// </CardBody>
// </Card>
// </Col>
// </Row>
// </Container>
// </Base>

// </div>
//     );
// }
// export default Signup;