import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Gigster-Logo.png'
import './Header.css'



export const Header = () => {
  return (
    <header className="banner">
        <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="app-name">Gigster</span>
        </Link>
    </header>
  )
}
