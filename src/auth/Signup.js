import React from 'react'
import "./auth.css";

const Signup = () => {
    return (
        <div className='auth-page'>
            <div className='login-div'>
                <h2>Create Account</h2>
                <input placeholder='User Name' required />
                <input type='email' className='user' placeholder='Enter e-mail' required />
                <input type='password' className='pwd' placeholder='Password' required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                <input type='password' className='pwd' placeholder='Confirm Password' required />

                <button>Sign Up</button>
                <div className='lower-login'>
                    <p className='psg'>Already have an account?</p>&nbsp;
                    <p className='sign-up'>Sign in</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;