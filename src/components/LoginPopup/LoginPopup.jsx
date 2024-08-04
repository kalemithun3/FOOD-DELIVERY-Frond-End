import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [CurrentState, setCurrentState] = useState('Login');
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title" >
                    <h2>{CurrentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-inputs">
                    {CurrentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{CurrentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {CurrentState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have a account? <span onClick={() => setCurrentState("Login")}>login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup;