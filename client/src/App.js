import React from "react"
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EnterPin } from "./Components/Forms/EnterPin";
import { Login } from './Components/Forms/Login';
import { Banner } from "./Components/Banner/Banner";
import { Register } from "./Components/Forms/Register";


function App() {
  return (
    <Router>
      <Banner/>
      <Routes>
        <Route path="/" element={<EnterPin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
