import React, { useState } from 'react'
//import './Forms.css'
import user_icon from '../Assets/user_icon.png'
import lock_icon from '../Assets/lock_icon.png'
import email_icon from '../Assets/email_icon.png'
import visible_icon from '../Assets/visible_icon.png'
import nonVisible_icon from '../Assets/nonVisible_icon.png'


export const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {
            username: formData.username === '',
            email: formData.email === '',
            password: formData.password === '',
            confirmPassword: formData.confirmPassword === '',
        };
        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validateForm()) {
            try {
                const response = await fetch('/api/setPreformer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    const result = await response.json();
                    console.log('Form submitted:', result);
                    setErrorMessage('')
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    });
                    //After success redirect to preformer home page
                } else {
                    const error = await response.json();
                    if(error.error === 'Email or username already in use') {
                        setErrorMessage('A performer is already using this email or username.')
                    } else {
                        setErrorMessage('An error occurred. Please try again.');
                    }
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    });
                }
            } catch (e) {
                console.error('Network error:', e)
            }
        }
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="header">
                <div className="text">Create Account</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt='username icon'/>
                    <input
                        type='text'
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && formData.username === '' &&  <span className="error-message">* Required</span>}
                </div>
                <div className="input">
                    <img src={email_icon} alt='email icon'/>
                    <input
                        type='email'
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && formData.email === '' && <span className="error-message">* Required</span>}
                </div>
                <div className="input">
                    <img src={lock_icon} alt='password icon'/>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && formData.password === '' && <span className="error-message">* Required</span>}
                    <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {formData.password !== '' && <img src={showPassword ? visible_icon : nonVisible_icon} alt="Toggle visibility" />}
                    </button>
                </div>
                <div className="input">
                    <img src={lock_icon} alt='confirm password icon'/>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && formData.confirmPassword === '' &&  <span className="error-message">* Required</span>}
                    <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {formData.confirmPassword !== '' && <img src={showConfirmPassword ? visible_icon : nonVisible_icon} alt="Toggle visibility" />}
                    </button>
                </div>
                {errorMessage && (<div className="global-error">{errorMessage}</div>)}
                <div className="submit-container">
                    <button className="submit">Create Account</button>
                </div>
            </div>
            <div className="footer">
                <small>Already have an account? | <a href="/Login">Login</a></small>
            </div>
        </form>
    );
}
