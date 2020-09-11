import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const AddEmp=()=>{
    let history=useHistory();
    const[employee,setEmployee]=useState({
        name:"",
        age:"",
        salary:""
    });

    const {name , age , salary}= employee;

    const onInputChange= e=>{
       setEmployee({...employee,[e.target.name]:e.target.value})
    };

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3002/employees", employee);
        history.push("/");
    }

    return(
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add An Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your salary"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
    )
} 

export default AddEmp