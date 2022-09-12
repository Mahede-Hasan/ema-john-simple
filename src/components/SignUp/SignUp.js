import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop')
    }

    const handleCreateForm = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password did not match')
            return;
        }
        if(password.length > 6){
            setError('your password must be 6 character or langer')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='login-container signup'>
            <h1 className='login-text'>SignUp</h1>
            <div className='login-form'>
                <form onSubmit={handleCreateForm}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='email'  required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='password'  required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" placeholder='confirm password'  required id="" />
                    </div>
                    <p style={{color:"red"}}>{error}</p>
                    <button className='login-btn' type="submit">SignUp</button>
                    <p className='link-text'>Already have an account? <Link to='/login'>Login</Link></p>

                    <div className="divider">
                        <div className="div-1"></div>
                        <div><h5>Or</h5></div>
                        <div className="div-2"></div>
                    </div>

                    <button className='google-btn'> <img src="google-icon.png" alt="" /> <h4>Continue With Google</h4></button>
                </form>
            </div>

        </div>
    );
};

export default SignUp;