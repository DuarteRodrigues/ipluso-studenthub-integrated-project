/**
 * @file EventArticle.tsx
 * @description Page component for displaying a single event article in detail.
 * 
 * @page EventArticle
 * @returns {JSX.Element} A page displaying the event article's content.
 */

// Import Packages
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Import Components
import Headers from '../components/Header/Header.tsx';
import EventArticleLayout from '../layouts/EventArticleLayout.tsx';
import Footer from '../components/Footer/Footer.tsx';

// Import Services
import { fetchArticle } from '../services/api.tsx';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const EventArticle: React.FC = () => {

    const { id } = useParams<{ id: string}>();

    const { data: article, isLoading, error } = useQuery({
        queryKey: ['news-article', id],
        queryFn: () => fetchArticle(apiURL, "news", id!),
        enabled: !!id,
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) return <div>A carregar artigo...</div>;
    if (error || !article) return <div> Artigo não encontrado.</div>;


    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Headers/>
            <div style={{ flex: "1"}}>
                <EventArticleLayout article={article} />
            </div>
            <Footer/>
        </div>
    )
}

export default EventArticle