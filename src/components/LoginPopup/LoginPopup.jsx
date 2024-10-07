import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [CurrentState, setCurrentState] = useState('Login');
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (CurrentState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title" >
                    <h2>{CurrentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-inputs">
                    {CurrentState === "Login" ? <></> : <input name='name'
                        onChange={handleChange} value={data.name} type="text" placeholder='Your Name' required />}

                    <input type="email" name='email'
                        onChange={handleChange} value={data.email} placeholder='Your Email' required />
                    <input type="password" name='password'
                        onChange={handleChange} value={data.password} placeholder='Password' required />
                </div>
                <button type='submit'>{CurrentState === "Sign Up" ? "Create account" : "Login"}</button>
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