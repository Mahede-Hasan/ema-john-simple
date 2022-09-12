import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Shipment = () => {
    // const [user] = useAuthState()
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [address, setAddress] = useState('')
    // const [phone, setPhone] = useState('')
    // const [error, setError] = useState('')

    // const handleNameBlur = event =>{
    //     setName(event.target.value)
    // }

    // const handleAddressBlur = event =>{
    //     setAddress(event.target.value);
    // }

    // const handlePhoneBlur = event =>{
    //     setPhone(event.target.value);
    // }

    // const handleShipping = event =>{
    //     event.preventDefault()
    // }
    return (
        <div className='login-container signup'>
            <h1>hello from shipment</h1>
            {/* <h1 className='login-text'>Shipment</h1>
            <div className='login-form'>
                <form onSubmit={handleShipping}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" placeholder='Your Name'  required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user && email} type="email" name="email" placeholder='email'  readOnly id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" placeholder='Address'  required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" name="phone" placeholder='Phone Number'  required id="" />
                    </div>
                    
                </form>
            </div> */}
        
        </div>
    );
};

export default Shipment;