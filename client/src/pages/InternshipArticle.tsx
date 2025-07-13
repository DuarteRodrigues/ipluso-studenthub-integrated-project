/**
 * @file InternshipArticle.tsx
 * @description This file contains the InternshipArticle component which fetches and displays a specific internship article based on the ID from the URL parameters.
 * 
 * @page InternshipArticle
 * @returns {JSX.Element} The rendered component containing the article details.
 */

// Import Packages
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Import Components
import Headers from '../components/Header/Header.tsx';
import InternshipArticleLayout from '../layouts/InternshipArticleLayout.tsx';
import Footer from '../components/Footer/Footer.tsx';

// Import Services
import { fetchArticle } from '../services/api.tsx';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const InternshipArticle: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    console.log("InternshipArticle ID:", id);

    const { data: article, isLoading, error } = useQuery({
        queryKey: ['internships-article', id],
        queryFn: () => fetchArticle(apiURL, "internships", id!),
        enabled: !!id,
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) return <div>A carregar artigo...</div>;
    if (error || !article) return <div>Artigo não encontrado.</div>;

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Headers/>
            <div style={{ flex: "1"}}>
                <InternshipArticleLayout article={article} />
            </div>
            <Footer/>
        </div>
    )
}

export default InternshipArticle;