import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { ToDoApp } from './ToDoApp';
import './style.css';

ReactDOM.createRoot( document.querySelector( '#root' ) ).render(
    <React.StrictMode>
        <Provider store={ store }>
            <ToDoApp />
        </Provider>
    </React.StrictMode>
);
