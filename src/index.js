import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
