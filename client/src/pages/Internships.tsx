/**
 * @file Internships.js
 * @description
 *
 * @page
 * @returns
 */

// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer";

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
