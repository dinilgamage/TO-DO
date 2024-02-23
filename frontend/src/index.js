import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './context/TodoContext';  
import { AuthProvider } from './context/AuthContext'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>
);

