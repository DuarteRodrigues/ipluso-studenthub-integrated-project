// Import Packages
import React from "react";

// Import needed layouts
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
