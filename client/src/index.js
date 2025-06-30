/**
 * @file index.js
 * @description Entry point for the IPLuso StudentHub Integrated Project React application.
 * Initializes the root React component and renders the main App component.
 * Imports global styles and sets up the application for client-side rendering.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

// React Router allows for seamless transition between components
// It will only reload the element that needs to change, and not the whole pa

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
