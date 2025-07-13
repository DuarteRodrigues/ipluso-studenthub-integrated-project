/**
 * @file Footer.js
 * @description This file contains the Footer component, which renders the footer section of the application.
 *
 * @component Footer
 * @returns {JSX.Element} The rendered footer component.
 */

// Import Packages
import React from "react";

// Importing Styles
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <small>
        © {new Date().getFullYear()} | IPLuso StudentHub. All rights reserved.
      </small>
      {/* Add more info here later */}
    </footer>
  );
}
