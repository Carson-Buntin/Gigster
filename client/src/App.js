import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EnterPin } from "./Components/Enter Pin/EnterPin";
import { Login } from './Components/Login/Login';
import { Banner } from "./Components/Banner/Banner";


function App() {
  return (
    <Router>
      <Banner/>
      <Routes>
        <Route path="/" element={<EnterPin />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
