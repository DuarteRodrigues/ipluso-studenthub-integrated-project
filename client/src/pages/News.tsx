// Import Packages
import React from "react";

// Import needed components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function NewsPage() {
  return (
    <div>
      <Header />
      <h1>This is the News Page</h1>
      <p>
        This page will have a list of news that can be ordered from newest to
        oldest and can be filtered by organic units
      </p>
      <Footer />
    </div>
  );
}

export default NewsPage;
