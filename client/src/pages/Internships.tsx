/**
 * @file Internships.js
 * @description Page component for displaying internship opportunities.
 *
 * @page InternshipsPage
 * @returns {JSX.Element} A page displaying a list of available internships.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Import needed Layout
import InternshipsLayout from "../layouts/InternshipsLayout.tsx";

// Import needed components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

// Import Services
import { fetchArticles } from "../services/api.tsx";

// Import Utilities
import { sortMostRecent } from "../utils/articleManipulation.tsx";

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

// Fetch internships from the API
const fetchInternships = await fetchArticles(apiURL, "internships");

console.log("Internships fetched:", fetchInternships);

function InternshipsPage() {

  const { data: internships = [], isLoading: internshipsLoading, error: internshipsError } = useQuery({
    queryKey: ['internships'],
    queryFn: () => fetchInternships,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1"}}>
        <InternshipsLayout 
          internships={sortMostRecent(internships)}
          internshipsLoading={internshipsLoading}
          internshipsError={internshipsError}
        />
      </div>
      <Footer />
    </div>
  );
}

export default InternshipsPage;
