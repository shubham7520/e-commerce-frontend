import React from 'react'
import "./auth.css";

const Login = () => {
    return (
        <div className='auth-page'>
            <div className='login-div'>
                <h1>WELCOME!</h1>
                <input type='email' className='user' placeholder='Enter e-mail' required />
                <input type='password' className='pwd' placeholder='Password' required />
                <button>Sign In</button>
                <p>Forgot Password?</p>
                <div className='lower-login'>
                    <p className='psg'>Don't have an account?</p>&nbsp;
                    <p className='sign-up'>Create new one</p>
                </div>
            </div>
        </div>
    )
}

export default Login;