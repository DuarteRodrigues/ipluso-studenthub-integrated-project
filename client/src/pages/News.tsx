/**
 * @file News.tsx
 * @description This file contains the News page component, which displays a list of news articles.
 * 
 * @page News
 * @returns {JSX.Element} The rendered News page component.
 */

// Import Packages
import React from "react";

// Import needed Layout
import NewsLayout from "../layouts/NewsLayout.tsx";

// Import needed components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";


function NewsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1"}}>
        <NewsLayout />
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
