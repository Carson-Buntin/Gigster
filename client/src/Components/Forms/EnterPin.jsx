import React from 'react'
//import './Forms.css'
import music_note from "../Assets/music_note.png"

export const EnterPin = () => {
    return (
        <form className="container">
            <div className="header">
                <div className="text">Gigster</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src={music_note} alt=''/>
                <input type='text' placeholder="Enter Band Pin"/>
            </div>
            <div className="submit-container">
                <button className="submit">Enter</button>
            </div>
            </div>
            <div className="footer">
                <small>If you want to host a gig | <a href="/Login">Login</a></small>
            </div>
        </form>
    )
}
