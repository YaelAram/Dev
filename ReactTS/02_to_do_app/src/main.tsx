import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import ToDoProvider from './context/ToDoProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>,
);
