/**
 * @file Spaces.js
 * @description Page component for the Spaces section of the IPLuso StudentHub Integrated Project.
 *
 * @returns {JSX.Element} The Spaces page component.
 */

// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function SpacesPage() {
  return (
    <div>
      <Header />
      <h1>Spaces</h1>
      <p>This is the Spaces page.</p>
      <p>
        Here you can find information about various spaces available for
        students.
      </p>
      <Footer />
    </div>
  );
}

export default SpacesPage;
