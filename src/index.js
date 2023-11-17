import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './Ecommerce/index.css';
import ColorCode from './ColorCode/ColorCode';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <ColorCode />
      </BrowserRouter>
    </React.StrictMode>
);