import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import './main.css';
import { MainApp } from './useContext/MainApp';

ReactDOM.createRoot( document.querySelector( '#root' ) ).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp />
        </BrowserRouter>
    </React.StrictMode>
);
