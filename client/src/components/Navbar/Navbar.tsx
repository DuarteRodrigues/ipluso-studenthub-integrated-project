/**
 * @file Navbar.js
 * @description This file contains the Navbar component, which renders the navigation bar of the application.
 *
 * @component Navbar
 * @returns {JSX.Element} The rendered navigation bar component.
 */

//Import Packages
import React from "react";
import { Link } from "react-router-dom";

// Importing Styles
import "./Navbar.css";

// List of internal platform links
const internalLinks = [
  { label: "Notícias", url: "/news" },
  { label: "Eventos", url: "/events" },
  { label: "Estágios", url: "/internships" },
  { label: "Espaços", url: "/spaces" },
  { label: "FAQ", url: "/faq" },
  { label: "Contatos", url: "/contacts" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="Navbar">
      <div className="Links">
        {internalLinks.map((link) => (
          <div className="Button">
            <Link to={link.url}>{link.label}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
