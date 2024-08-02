import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EnterPin } from "./Components/Enter Pin/EnterPin";
import { Login } from './Components/Login/Login';
import { Header } from "./Components/Header/Header";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<EnterPin />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
