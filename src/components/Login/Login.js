import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (loading) {
        return <p style={{ textAlign: 'center', fontSize: '30px' }}>Loading...</p>;
    }

    if (user) {
        navigate(from, { replay: true })
    }

    const handleUserLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }




    return (
        <div className='login-container'>
            <h1 className='login-text'>Login</h1>
            <div className='login-form'>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='email' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='password' required id="" />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>

                    <button className='login-btn' type="submit">Login</button>
                    <p className='link-text'>New to Ema-john? <Link to='/signup'>Create new account</Link></p>

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

export default Login;