import React from 'react'
import './Forms.css'
import user_icon from "../Assets/user_icon.png"
import lock_icon from "../Assets/lock_icon.png"


export const Login = () => {
    return (
        <form className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt='username icon'/>
                    <input type='text' placeholder="Username"/>
                </div>
                <div className="input">
                    <img src={lock_icon} alt='password icon'/>
                    <input type='password' placeholder="Password"/>
                </div>
                <div className="submit-container">
                    <button className="submit">Login</button>
                </div>
            </div>
            <div className="footer">
                <small>Don't have an account? | <a href="/Register">Create Account</a></small>
            </div>
        </form>
    )
}
