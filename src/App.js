// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Forum from './Forum';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
