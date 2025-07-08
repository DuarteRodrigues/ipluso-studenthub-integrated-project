/**
 * @file Home.js
 * @description Main application component for the IPLuso StudentHub Integrated Project.
 * Sets up the React Router for client-side navigation and renders the Navbar and page components.
 * Defines routes for Home, FAQ, Contacts, and Tests pages.
 */

// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header.tsx";
import TitleCard from "../components/TitleCard/TitleCard.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage.tsx";
import NewsEventsPanel from "../components/NewsEventsPanel/NewsEventsPanel.tsx";
import Footer from "../components/Footer/Footer.tsx";

// Import Custom Hooks
import useImagesLoaded from "../hooks/useImagesLoaded.tsx";

// Import images for use in the Home page
import PalacioImg from "../assets/images/Palácio_do_Conde_de_Vimioso.jpg";
import StudenthubImg from "../assets/images/Studenthub.svg";
import EnsinoLusofonaImg from "../assets/images/ensino-lusofona-branco.svg";
import LusofonaVectorImg from "../assets/images/lusofona_vector.png";
import MoodleLogoImg from "../assets/images/moodle-logo.png";
import NetpaLogoImg from "../assets/images/netpa-logo.png";
import AeiplusoLogoImg from "../assets/images/aeiplusoLogo.png";

//List all image URLs used on the Home page
const imageUrls: string[] = [
  PalacioImg,
  StudenthubImg,
  EnsinoLusofonaImg,
  LusofonaVectorImg,
  MoodleLogoImg,
  NetpaLogoImg,
  AeiplusoLogoImg,
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

  // Todo: Display the 3 most recent news and events side by side (they can be hardcoded for the sake of testing)

  return (
    <div>
      <Header />
      <TitleCard />
      <Navbar />
      <WelcomeMessage />
      <NewsEventsPanel />
      <Footer />
    </div>
  );
}

export default HomePage;
