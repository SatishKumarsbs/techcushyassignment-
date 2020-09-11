import React, {useState, useEffect  } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'
const EditEmp=()=>{
    let history=useHistory();
    const {id}=useParams();
    const[employee,setEmployee]=useState({
        name:"",
        age:"",
        salary:""
    });

    const {name , age , salary}= employee;

    const onInputChange= e=>{
       setEmployee({...employee,[e.target.name]:e.target.value})
    };


    useEffect(() => {
        loadEmp()
    },[])

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/employees/${id}`, employee);
        history.push("/");
    }

    const loadEmp=async()=>{
        const result=await axios.get(`http://localhost:3002/employees/${id}`)
   setEmployee(result.data);
    }


    return(
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Employee</h2>
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
         
          
          <button className="btn btn-warning btn-block">Update Employee</button>
        </form>
      </div>
    </div>
    )
} 

export default EditEmp;