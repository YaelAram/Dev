import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../auth/pages/Login';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export function AppRouter() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path="/heroes/*" element={ 
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </React.Fragment>
    );
};
