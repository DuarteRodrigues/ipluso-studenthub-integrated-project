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
import TitleCard from "../components/TitleCard/TitleCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <TitleCard />
      <Navbar />
      <p>
        This is the home page of the IPLuso StudentHub Integrated Project. Here
        you can find information about the project, its objectives, and how to
        get involved.
      </p>
      <Footer />
    </div>
  );
}
