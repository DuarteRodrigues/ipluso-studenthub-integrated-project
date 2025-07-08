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

// Import needed Data
import events from '../utils/EventsTestData.tsx';

// Import Components
import Headers from '../components/Header/Header.tsx';
import EventArticleLayout from '../layouts/EventArticleLayout.tsx';
import Footer from '../components/Footer/Footer.tsx';

const EventArticle: React.FC = () => {

    const { id } = useParams<{ id: string}>();
    const article = events.find(e => e.id === Number(id));

    if (!article) return <div> Artigo não encontrado.</div>;


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