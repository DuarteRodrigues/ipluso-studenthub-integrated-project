/**
 * @file Spaces.js
 * @description Page component for the Spaces section of the IPLuso StudentHub Integrated Project.
 *
 * @returns {JSX.Element} The Spaces page component.
 */

// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header.tsx";
import SpacesLayout from "../layouts/SpacesLayout.tsx";
import Footer from "../components/Footer/Footer.tsx";

function SpacesPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1" }}>
        <SpacesLayout />
        </div>
      <Footer />
    </div>
  );
}

export default SpacesPage;
