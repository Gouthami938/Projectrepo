import BaseMem from "../components/BaseMem";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import card from "./card.jpg";
import Login from "./Login";



function SubmittedForm() {

    return (

<BaseMem>

        <div 

        style={{
        
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:750
        
        }}>

<Container>


<Col sm={{size:10,offset:0}} >
    


<CardHeader>
{/* <h3><span style={{fontFamily:'Times new Roman'}} > Hi i am working</span>   </h3> */}


        <pre><h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>                                Hey User Want To See More Profiles?</span></h2></pre>
        <pre><h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>                                     And Want To Connect With Them!</span> </h2></pre>
        <pre><h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>                                 Come And Avail The Membership!!</span></h2></pre> 
        <pre><h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>                 YOUR PARTNER IS NO MORE AWAY FROM YOU</span></h2></pre> 

        </CardHeader>
            <div>
            
            <Row className="mt-4">
        
        {/* {JSON.stringify(data)} */}


        <Col  sm={3}>
        <Card color="secondary" >
        <CardHeader>
     <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width="250px"  className='img-fluid' alt='Sample' />
     <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Name:Mark</span></h3>
     <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Age:25</span></h3>

    
</CardHeader>
</Card>
</Col>
     
<Col  sm={3}>
        <Card color="secondary" >
        <CardHeader>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_B2lerxs2J5Mwrg420VNbt1DoqRvuPb9pYti77UTSEyxKhqpH386mC1iyeBvPS08-ng&usqp=CAU' width="250px"  className='img-fluid' alt='Sample' />
       <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Name:Rita</span></h3>
       <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Age:30</span></h3>
</CardHeader>
</Card>
</Col>

<Col  sm={3}>
        <Card color="secondary" >
        <CardHeader>
       <img src='https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-alone-and-stretching-during-his-picture-id1359149467?b=1&k=20&m=1359149467&s=170667a&w=0&h=CM3GJnoPZvw-armRIqAxaxxe5IslW_oLBCfC9vl0Ups=' className='img-fluid' alt='Sample' />
       <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Name:Steffan</span></h3>
       <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Age:24</span></h3>

      
</CardHeader>
</Card>
</Col>

<Col  sm={3}>
        <Card color="secondary" >
        <CardHeader>
       <img src='https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'   className='img-fluid' alt='Sample' />
       <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Name:John</span></h3>
       <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Age:23</span></h3>

</CardHeader>
</Card>
</Col>
</Row>

        {/* <Button onClick={e=>userAccept(e)}>Accept</Button> <Button >Declaine</Button> */}
         
                {/* <Button onClick={e=>userAccept(e)}>Accept</Button> <Button >Declaine</Button> */}
          
            </div>



</Col>

</Container>






        </div>
        </BaseMem>


          );
        }

        export default SubmittedForm;
        
        
        