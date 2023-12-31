import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import { App } from './App';
import { store } from './store/store';

import './styles.css';

ReactDOM.createRoot( document.querySelector( '#root' ) ).render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
