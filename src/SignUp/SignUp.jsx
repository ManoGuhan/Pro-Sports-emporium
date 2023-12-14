import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate=useNavigate();
    const signup=()=>{navigate("/signup")}
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <h2>______</h2>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Mobile Number' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='E-Mail' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required/>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>
                    <a class="sign" onClick={loginButton}>Already an user? Log in</a></p>
                </div>
            </form>
        </div>
    )
}
export default Login;