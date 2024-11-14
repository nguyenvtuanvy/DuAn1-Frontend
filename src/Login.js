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
    const [showPassword, setShowPassword] = useState(false);

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder='Enter your username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <i className="fa fa-user input-icon"></i>
                        </div>
                        {errors.username && <p className="error-text">{errors.username}</p>}
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i
                                className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} input-icon`}
                                aria-hidden="true"
                                onClick={togglePasswordVisibility} // Thêm sự kiện onClick để chuyển đổi
                            ></i>
                        </div>
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
                        {/* <button type="button" onClick={handleBack} className="back-btn">Back</button> */}
                    </div>
                </form>
                {/* <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div> */}
            </div>
        </div>
    );
};

export default Login;
