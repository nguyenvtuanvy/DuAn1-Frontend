// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', fullname: '', password: '' });

    const validateForm = () => {
        let valid = true;
        const newErrors = { username: '', fullname: '', password: '' };

        if (username.trim().length === 0) {
            newErrors.username = 'Username is required.';
            valid = false;
        } else if (username.trim().length < 4) {
            newErrors.username = 'Username must be at least 4 characters.';
            valid = false;
        }

        if (fullname.trim().length === 0) {
            newErrors.fullname = 'Fullname is required.';
            valid = false;
        }

        if (password.trim().length === 0) {
            newErrors.password = 'Password is required.';
            valid = false;
        } else if (password.trim().length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8087/api/v1/home/register', { username, fullname, password });
                console.log('Registration successful:', response.data);
                navigate('/login');
            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="register-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {errors.username && <p className="error-text">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname:</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                    {errors.fullname && <p className="error-text">{errors.fullname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <div className="form-buttons">
                    <button type="submit" className="register-btn">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
