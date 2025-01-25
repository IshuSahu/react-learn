import React, { useState, useContext } from 'react';
import UserContext, { UserContextHook } from '../context/UserContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const { setUser } = UserContextHook(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we set the user context with the username.
        setUser({ userName });
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Enter userName' 
            />
            <input 
                type="password" 
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                placeholder='Enter passWord' 
            />
            <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
