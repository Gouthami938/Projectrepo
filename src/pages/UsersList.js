import React,{useState,useEffect} from "react";
import { Table } from "reactstrap";
import Base from "../components/Base";


function UsersList(){

const[data,setData]=useState([]);
useEffect(()=>{
    // let result=await fetch("http://localhost:");
    // let result=await result.json();
    setData(result)
},[])
console.warn("result",data)


return(
    <div>
        <Base/>
        <h1>Profile List</h1>
    </div>
)

}
export default UsersList;




















