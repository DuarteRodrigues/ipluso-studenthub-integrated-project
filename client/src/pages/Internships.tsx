/**
 * @file Internships.js
 * @description Page component for displaying internship opportunities.
 *
 * @page InternshipsPage
 * @returns {JSX.Element} A page displaying a list of available internships.
 */

// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function InternshipsPage() {
  return (
    <div>
      <Header />
      <h1>This is the Internships page</h1>
      <p>
        This page will contain a list/grid of available internships for the
        year.
      </p>
      <Footer />
    </div>
  );
}

export default InternshipsPage;
