import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from './Components/pages/Contact';
import NotFound from './Components/pages/NotFound';
import AddEmp from './employees/AddEmp';
import EditEmp from './employees/EditEmp';
import ViewEmp from './employees/ViewEmp';



function App() {
  return (
   <Router>
  
   <div className="App">
   <Navbar/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/contact" component={Contact}/>
   <Route Route exact path="/employee/addemp" component={AddEmp}/>
   <Route Route exact path="/employee/editemp/:id" component={EditEmp}/>
   <Route Route exact path="/employee/viewemp/:id" component={ViewEmp}/>
   <Route component={NotFound}/>
   </Switch> 
   </div>
  
   </Router>
  );
}

export default App;
