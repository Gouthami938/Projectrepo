import {toast} from "react-toastify";
import axios from "axios";
import React, { useState ,useEffect} from 'react';
// import { Button } from 'reactstrap';
import BaseUD from "../components/BaseUD";
import {Table} from "reactstrap";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";


function Silverlist() {
    const [data,setData]=useState([]);
    useEffect(() => {
 async function fetchMyAPI(){
        let result = await fetch("http://localhost:8080/api/user/list");
        result= await result.json();
        setData(result)
        console.warn("data",data);
        if (result.status==200) {
            console.log("navigating");
            // navigate('/Acceptlist')
            //setIsSubmitted(true);
            toast.success("Details Submited")
        }
 }
 fetchMyAPI()
  },[])
  
  return(
<div>
<BaseUD/>
<h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>AvailableProfiles</span></h2>

{
data.map((item)=>

<Row className="mt-4">
        
        {/* {JSON.stringify(data)} */}


        <Col  sm={3} >
        <Card color="secondary" >
        <CardHeader>
        <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Name: {item.name}</span></h3>
<h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>DOB:{item.date.substring(0,10)}</span></h3>
        <Button color='dark' onClick={()=>toast.success("Accepted!") }>Accept</Button>
     <span></span>  <Button color='dark' onClick={()=>toast("Declained!")}> Declaine</Button>
</CardHeader>
</Card>
</Col>
</Row>  
)
}
</div>
  )
}






{/* 

//   const insertAction = async (e) => {
   
//       fetch("http://localhost:8080/api/user/list")
    
//         .then(res => res.json())
//         .then(
//           (result) => {
//             console.log('called get items')
//             console.log(result)
//             setItems(result);
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             setError(error);
//             }
//           )
    
//       } */}



  

export default Silverlist;





