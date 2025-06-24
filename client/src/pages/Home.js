/**
 * @file Home.js
 * @description Main application component for the IPLuso StudentHub Integrated Project.
 * Sets up the React Router for client-side navigation and renders the Navbar and page components.
 * Defines routes for Home, FAQ, Contacts, and Tests pages.
 */

// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";


export default function HomePage() {
    return (
        <div>
            <Header/>
            <h1>Welcome to StudentHub IPLuso</h1>
            <p>This is the landing page.</p>
            <Navbar/>
        </div>
    );
}