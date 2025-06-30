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

// Import Custom Hooks
import useImagesLoaded from "../hooks/useImagesLoaded.tsx";

//List all image URLs used on the Home page
const imageUrls: string[] = [
  require("../assets/images/Palácio_do_Conde_de_Vimioso.jpg"),
  // Add more images if needed
];

function HomePage() {
  const imagesLoaded = useImagesLoaded(imageUrls);

  if (!imagesLoaded) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <p>Loading Images...</p>
      </div>
    );
  }

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

export default HomePage;
