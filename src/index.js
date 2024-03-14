import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./components/Nav.css";
import "./components/hero.css";
import "./components/skill.css";
import "./components/resume.css";
import "./components/portfolio.css";
import "./components/contact.css";
import "./about.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

