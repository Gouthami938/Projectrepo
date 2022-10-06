import Base from "../components/Base";
import React from "react";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody, Label} from "reactstrap";
import { useState } from "react";



const UserDto=()=>{

return(
    <Base>
    <div className="container content">
        <div className="border mt-4 p-4">
            <h3 className="text-center bg-info p-2 mb-3">
        Here is your Details
            </h3>
            <div className="row">
<div className="row">
    <div className="col-md-4">
        <div className="d-flex flex-column align-items-left">
<div className="ms-4">
    Name:{""}
    {localStorage.getItem("name")}

</div>
        </div>

        <div className="d-flex flex-column align-items-left">
<div className="ms-4">
    Date of Birth:{""}
</div>
        </div>
        <div className="d-flex flex-column align-items-left">
<div className="ms-4">
    Place:{""}
</div>
        </div>
        <div className="d-flex flex-column align-items-left">
<div className="ms-4">
    Age:{""}
</div>
        </div>
        <div className="d-flex flex-column align-items-left">
<div className="ms-4">
    Hobbies:{""}
</div>
        </div>

    </div>
</div>

            </div>

        </div>
        
    </div>
    </Base>
)
};


export default UserDto;





















// import { Table } from "reactstrap";

// function BasicExample() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default BasicExample;
























// import React from "react";
// import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody, Label} from "reactstrap";



// const userDto=()=>{

// // return(
// //     <div className="container content">
// //         <div className="border mt-4 p-4">
// //             <h3 className="text-center bg-info p-2 mb-3">

// //                 Welcome To User Management System
// //             </h3>
// //             <div className="row">
// // <div className="row">
// //     <div className="col-md-4">
// //         <div className="d-flex flex-column align-items-center">

// //         </div>
// //     </div>
// // </div>

// //             </div>

// //         </div>
        
// //     </div>
// // )
// };


// export default userDto;













































// // // import React,{useState} from "react";
// // // import {toast} from "react-toastify";
// // // import Base from "../components/Base";
// // // import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
// // // import axios from "axios";



// // // const userDto=()=>{
// // //    const [name,setname]=useState('')
// // //    const [date,setdate]=useState('')
// // //    const [place,setplace]=useState('')
// // //    const [age,setage]=useState('')
// // //    const [hobbiese,sethobbies]=useState('')
// // //    // const [gender,setgender]=useState('')

// // // const handleSubmit=(e)=>{
// // //    e.preventDefault();

// // //    // if(name===""){
// // //    //    toast.error("Name is required")
// // //    // }else {
// // //    //    toast.error("date is required")
// // //    localStorage.setItem("name",name);
// // //    localStorage.setItem("date",date);
// // //    localStorage.setItem("place",place);
// // //    localStorage.setItem("age",age);

// // //    localStorage.setItem("hobbiese",hobbiese);




// // // };
















// // // return(



// // //        <Base>
        
// // //         <Container>

// // //         <Row className="mt-4">
// // //         <Col sm={{size:6,offset:3}} >
            
// // //         <Card color="secondary">

// // //         <CardHeader>

// // //         <h3>Fill YOUR DETAILS</h3>
// // //         </CardHeader>
// // //       <CardBody>


      
        
// // //          {/*  Field*/}
// // //          <Form>
// // //             <FormGroup>
// // //             <Input type="text"
// // //             placeholder="Enter Name"
// // //             name="name"
// // //             id="username"
// // //            value={name}
// // //            onChange={e=>setname(e.target.value)} 
// // //            ></Input>
// // //             </FormGroup>
// // //             </Form>


// // //             {/* <Input type="text" name="username" id="loginUser" placeholder="Enter Name"
// // //        required  value={register.username} 
// // //        onChange={(e) => changeDetails(e)} */}





// // //             <Form>
// // //          {/* dob Field*/}

// // //             <FormGroup>
// // //             <Input type="date"
// // //             name="date"
// // //             placeholder="Enter Date of birth"
// // //             value={date}
// // //            onChange={e=>setname(e.target.value)} 

// // //             ></Input>
// // //             </FormGroup>
// // //             </Form>
// // //             <Form>
// // //          {/* Place Field*/}

// // //             <FormGroup>
// // //             <Input type="text"
// // //             name="place"
// // //             placeholder="Enter Place"
        
// // //             value={place}
// // //             onChange={e=>setplace(e.target.value)} 
// // //             ></Input>
// // //             </FormGroup>
// // //             </Form>

// // //             <Form>
// // //             {/* Age Field*/}

// // //             <FormGroup>
// // //             <Input type="integer"
// // //             name="age"
// // //             id="age"
// // //             placeholder="Enter Age"
// // //             value={age}
// // //             onChange={e=>setage(e.target.value)} 
// // //             ></Input>
// // //             </FormGroup>
// // //             </Form>

// // //             <Form>
// // //             {/* Hobbies Field*/}

// // //             <FormGroup>
// // //             <Input type="text"
// // //             name="hobbies"
// // //             placeholder="Enter Hobbies"
// // //             value={hobbiese}
// // //            onChange={e=>sethobbies(e.target.value)} 

// // //             ></Input>
// // //             </FormGroup>
// // //             </Form>

           
// // //             {/* Gender Field
        
// // //             <Form>
// // //             <FormGroup>
// // //             <Input type="radio"
// // //             name="Gender"
// // //             value="Male"
// // //             id="flexRadioDefault"

// // //             onChange={(e) => handleChange(e)}
           

// // //             ></Input>
// // //             </FormGroup>
// // //             </Form>
// // //           */}
 




// // //             <Container  className="text-center">

// // //             <Button  onClick={e => insertAction(e)} color="dark">Submit</Button>

// // //             </Container>

// // //             </CardBody>
// // //         </Card>
// // //         </Col>
// // //         </Row>
// // //     </Container>
// // //        </Base>
// // // )
// // // };

// // //       export default userDto;
