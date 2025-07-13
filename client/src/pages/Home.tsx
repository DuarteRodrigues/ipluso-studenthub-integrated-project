/**
 * @file Home.js
 * @description Main application component for the IPLuso StudentHub Integrated Project.
 * Sets up the React Router for client-side navigation and renders the Navbar and page components.
 * Defines routes for Home, FAQ, Contacts, and Tests pages.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Import needed components
import Header from "../components/Header/Header.tsx";
import HomeLayout from "../layouts/HomeLayout.tsx";
import Footer from "../components/Footer/Footer.tsx";

// Import Custom Hooks
import useImagesLoaded from "../hooks/useImagesLoaded.tsx";

// Import Services
import { fetchArticles } from "../services/api.tsx";

// Import Utilities
import {sortMostRecent} from "../utils/articleManipulation.tsx";

// Import images for use in the Home page
import PalacioImg from "../assets/images/Palácio_do_Conde_de_Vimioso.jpg";
import StudenthubImg from "../assets/images/Studenthub.svg";
import EnsinoLusofonaImg from "../assets/images/ensino-lusofona-branco.svg";
import LusofonaVectorImg from "../assets/images/lusofona_vector.png";
import MoodleLogoImg from "../assets/images/moodle-logo.png";
import NetpaLogoImg from "../assets/images/netpa-logo.png";
import AeiplusoLogoImg from "../assets/images/aeiplusoLogo.png";
import CampusCG from "../assets/images/Campus-Campo-Grande.jpg";
import CampusBP from "../assets/images/Campus-Braco-Prata.jpg";

//List all image URLs used on the Home page
const imageUrls: string[] = [
  PalacioImg,
  StudenthubImg,
  EnsinoLusofonaImg,
  LusofonaVectorImg,
  MoodleLogoImg,
  NetpaLogoImg,
  AeiplusoLogoImg,
  CampusCG,
  CampusBP,
  // Add more images if needed
];

// Define the API URL from environment variables
const apiURL = process.env.REACT_APP_API_URL;

// Fetch articles from the API
  const fetchNews = await fetchArticles(apiURL, "news");
  const fetchEvents = await fetchArticles(apiURL, "events");


function HomePage() {

  // Use React Query to fetch and cache news
  const {data : news = [], isLoading: newsLoading, error: newsError} = useQuery ({
    queryKey: ['news'],
    queryFn: () => fetchNews,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  })

  // Use React Query to fetch and cache events
  const {data : events = [], isLoading: eventsLoading, error: eventsError} = useQuery ({
    queryKey: ['events'],
    queryFn: () => fetchEvents,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  const sortedNews = sortMostRecent(news).slice(0, 3); // Get the 3 most recent news
  const sortedEvents = sortMostRecent(events).slice(0, 3); // Get the 3 most recent events

  const imagesLoaded = useImagesLoaded(imageUrls);

  if (!imagesLoaded) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <p>Loading Images...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1"}}>
        <HomeLayout
          news={sortedNews}
          newsLoading={newsLoading}
          newsError={newsError}
          events={sortedEvents}
          eventsLoading={eventsLoading}
          eventsError={eventsError}
        />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
