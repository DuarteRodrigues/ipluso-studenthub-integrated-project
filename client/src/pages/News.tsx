/**
 * @file News.tsx
 * @description This file contains the News page component, which displays a list of news articles.
 * 
 * @page News
 * @returns {JSX.Element} The rendered News page component.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Import needed Layout
import NewsLayout from "../layouts/NewsLayout.tsx";

// Import needed components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

// Import Services
import { fetchArticles } from "../services/api.tsx";

// Import Utilities
import {sortMostRecent} from "../utils/articleManipulation.tsx";

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

// Fetch articles from the API
  const fetchNews = await fetchArticles(apiURL, "news");

function NewsPage() {

  const { data: news = [], isLoading: newsLoading, error: newsError } = useQuery({
    queryKey: ['news'],
    queryFn: () => fetchNews,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  const sortedNews = sortMostRecent(news);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1"}}>
        <NewsLayout 
          news={sortedNews}
          newsLoading={newsLoading}
          newsError={newsError}
        />
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
