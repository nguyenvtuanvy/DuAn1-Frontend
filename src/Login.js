import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const validateForm = () => {
        let valid = true;
        const newErrors = { username: '', password: '' };

        if (username.trim().length === 0) {
            newErrors.username = 'Username is required.';
            valid = false;
        } else if (username.trim().length < 4) {
            newErrors.username = 'Username must be at least 4 characters.';
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

    const handleLogin = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8087/api/v1/home/login', { username, password });
                console.log('Login successful:', response.data);

                Cookies.set('userData', JSON.stringify(response.data), { expires: 7 });

                navigate('/');
                window.location.reload();
            } catch (error) {
                console.error('Login failed:', error);
            }
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
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
                    <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
                    <button type="button" onClick={handleBack} className="back-btn">Back</button>
                </div>
            </form>
            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
};

export default Login;
