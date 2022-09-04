import React from "react";
import "./style.css"
import Navbar from "./navbar.js";
import Main from "./main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teams from "./pages/teams.js";


function App(){
    

    return (
        <>
        <Navbar/>
                
        <Main/>

        </>
      
    
       )
}

export default App