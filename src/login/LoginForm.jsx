import React from 'react'
import './Login.css'

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='Sports id' required/>
                    
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Enter Game' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required/>
                </div>

                <button type="submit">Create Account</button>
                <div className="register-link">
                    <p>Already an user? <a href=".">Log in</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;