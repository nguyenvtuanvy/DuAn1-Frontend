// src/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
    const [username, setUsername] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const userData = Cookies.get('userData');
        if (userData) {
            const user = JSON.parse(userData);
            setUsername(user.username);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('userData');
        setUsername('');
        setDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header className="header">
            <div className="logo">AgriAdvisor</div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <a href="#about">About</a>
                <a href="#forum">Forum</a>
                <a href="#contact">Contact Us</a>
            </nav>
            {username ? (
                <div className="user-menu">
                    <span className="welcome-msg" onClick={toggleDropdown}>Hello, {username}</span>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="/login" className="login-btn" >Login</Link>
            )}
        </header>
    );
};

export default Header;
