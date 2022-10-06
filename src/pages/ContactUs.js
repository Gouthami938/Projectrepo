import Base from "../components/Base";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";

const ContactUs = () => {
   

        return (
            <div style={{

                backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605
                
                }}>   

    <Base>   
    <Row className="mt-4">
<pre><h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>                                                              GET IN TOUCH</span></h2></pre>
</Row>
<Row className="mt-4">
<Col sm={2}>
        <Card color="secondary" >
        <CardHeader>
 {/* <br></br>    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAXMc0WX1KKjtTz1TrNEBL5O4u5GX5Odky6tZIvjaZW0x9uDbimwOWIACatgk8wRDbVc&usqp=CAU' width="50px"  className='center' alt='Sample'/> */}
<h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>ADDRESS</span></h3> 
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>Northern Division Office</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>146 Yuma Street</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>Denver CO 80223</span></h5>


</CardHeader>
</Card>

</Col>
</Row>
    </Base> 
  </div>
    );
};
export default ContactUs;