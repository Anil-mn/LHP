import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from '../pages/admin/login'
import Home from "../pages/admin/home";

const AdminRoutes = () =>{
  return(
    <Router>   
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home name="Home"/>}/>
      </Routes>
   </Router>
  )
 
}

export default AdminRoutes;