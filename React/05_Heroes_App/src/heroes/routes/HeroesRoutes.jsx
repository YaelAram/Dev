import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { DC, Marvel, SearchHeroById, SearchHeroByName } from '../pages';
import { NavBar } from '../../ui';

export function HeroesRoutes() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/" element={ <Navigate to="/heroes/marvel" /> } />
                <Route path="/marvel" element={ <Marvel /> } />
                <Route path="/dc" element={ <DC /> } />
                <Route path="/search" element={ <SearchHeroByName /> } />
                <Route path="/hero/:id" element={ <SearchHeroById /> } />
            </Routes>
        </React.Fragment>
    );
};
