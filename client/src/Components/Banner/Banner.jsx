import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Gigster-Logo.png'
import './Banner.css'



export const Banner = () => {
  return (
    <header className="banner">
        <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="app-name">Gigster</span>
        </Link>
    </header>
  )
}
