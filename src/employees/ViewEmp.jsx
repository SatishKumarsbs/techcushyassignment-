import React,{useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Emp=()=>{
const [emp, setEmp]=useState({
  name:"",
  age:"",
  salary:""  
});

const {id}=useParams();
useEffect(()=>{
    loadEmp();
},[]);
const loadEmp= async()=>{
    const res=await axios.get(
        `http://localhost:3002/employees/${id}`
    );
    setEmp(res.data);
};

return (
    <div className="container py-4">
    <Link className="btn btn-primary" to="/">
      back to Home
    </Link>
    <h1 className="display-4">User Id: {id}</h1>
    <hr />
    <ul className="list-group w-50">
      <li className="list-group-item">name: {emp.name}</li>
      <li className="list-group-item">user name: {emp.age}</li>
      <li className="list-group-item">email: {emp.salary}</li>
     
    </ul>
  </div>
);
}

export default Emp;