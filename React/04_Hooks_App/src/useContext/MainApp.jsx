import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { About, Home, Login, NavBar } from './components';
import { UserProvider } from './context/UserProvider';

// import './MainApp.css';

export function MainApp() {
    return (
        <UserProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="about" element={ <About /> } />
                <Route path="login" element={ <Login /> } />
                <Route path="/*" element={ <Navigate to={ "/about" } /> } />
            </Routes>
        </UserProvider>
    );
};
