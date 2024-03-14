import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Routes1 from './components/Routes/Routes1';
import Routes2 from "./components/Routes/Routes2";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="container-fluid h-100">
   <BrowserRouter>
   <Navbar/>
   <Routes1/>
   <Routes2/>
   
   
   </BrowserRouter>
 </div>
  );
}

export default App;
