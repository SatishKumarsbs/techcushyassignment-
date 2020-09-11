import React from 'react';
import {Link, N, NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <NavLink className="navbar-brand" to="#">Assignment</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About </NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contat </NavLink>
        </li>
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn text-dark bg-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
         </div>
         <Link className="btn btn-outline-light" to="/employee/addemp">Add User</Link>
      </nav>

        </>
    )
}

export default Navbar;