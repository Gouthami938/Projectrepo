
import Base from "../components/Base";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody, Label} from "reactstrap";

import React, { useState } from "react";
import { Table } from "reactstrap";
const UserTable=()=>{

const[name,setname]=useState("");
const[date,setdate]=useState("");

const[palce,setplace]=useState("");

const[age,setage]=useState("");

const[hobbies,sethobbies]=useState("");











    return(
      <Base>
      <Row className="mt-4">

<Col  sm={{size:7,offset:3}}>
<Card color="secondary">
<CardHeader>

<h3>User Information</h3>   


</CardHeader>
</Card>
</Col>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>DateOfBirth</th>
          <th>Place</th>
          <th>Age</th>
          <th>Hobbies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>21-1-2000</td>
          <td>Otto</td>
          <td>21</td>
          <td>playing</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Row>
    </Base>



    )
};

export default UserTable;










