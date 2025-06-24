/**
 * @file Navbar.js
 * @description This file contains the Navbar component, which renders the main navigation bar for the application,
 * including links to the Home, FAQ, and Contacts pages, as well as the Lusófona logo.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation bar component.
 */

//Import Packages
import React from "react"
import { Link } from "react-router-dom"

// Importing Styles
import "./Navbar.css"

// List of internal platform links
const internalLinks = [
    {label: "News", url: "/news"},
    {label: "Internships", url: "/internships"},
    {label: "FAQ", url: "/faq"},
    {label: "Contacts", url: "/contacts"},
]

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Links">
                {internalLinks.map(link =>(
                    <div className = "Button">
                        <Link to={link.url}>{link.label}</Link>
                    </div>
                ))}
            </div>
        </nav>
    );
}