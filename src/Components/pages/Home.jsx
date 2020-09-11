import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Home=()=>{
    const[employees, setEmployees]=useState([]);

useEffect(()=>{
    loadEmployees();
},[]);

const loadEmployees= async()=>{
    const result=await axios.get("http://localhost:3002/employees");
    setEmployees(result.data.reverse());
}

const deleteEmp = async id => {
    await axios.delete(`http://localhost:3002/employees/${id}`);
    loadEmployees();
  };

    return(
        <>
        <div className="container"> 
        <div className="py-4">
        <h1>Home Page</h1>

        <div>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {
            employees.map((employees,index)=>(
               <tr>
               <th scope="row">{index + 1}</th>
               <td>{employees.name}</td>
               <td>{employees.age}</td>
               <td>{employees.salary}</td>
               <td>
               <Link class="btn btn-primary mr-2" to={`employee/viewemp/${employees.id}`}>
                 View
               </Link>
               <Link
                 className="btn btn-outline-primary mr-2"
                 to={`employee/editemp/${employees}`}
               >
                 Edit
               </Link>
               <Link
                 class="btn btn-danger"
                 onClick={() => deleteEmp(employees.id)}
               >
                 Delete
               </Link> 
             </td>
               </tr>
            ))
           }
          </tbody>
        </table>
      </div>

        </div>
        </div> 
        </>
    )
}

export default Home;