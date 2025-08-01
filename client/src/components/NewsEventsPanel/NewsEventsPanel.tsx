/**
 * @file NewsEventsPanel.tsx
 * @description Component for displaying a panel of news and events.
 * 
 * @component NewsEventsPanel
 * @returns {JSX.Element} A panel displaying news and events.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query"

// Import Components
import NewsEventCard from "../NewsEventCard/NewsEventCard.tsx";

// Import Styles
import "./NewsEventsPanel.css";

// Declare types for props
type NewsEventsPanelProps = {
    news?: any[]; // Array of news articles
    newsLoading?: boolean; // Loading state for news
    newsError?: Error | null; // Error state for news
    events?: any[]; // Array of events
    eventsLoading?: boolean; // Loading state for events
    eventsError?: Error | null; // Error state for events
}

const NewsEventsPanel:React.FC<NewsEventsPanelProps> = ({
        news = [], newsLoading = false, newsError = null,
        events = [], eventsLoading = false, eventsError = null
        }) => {

    return (
    <>
        <div className="NewsEventsPanelHeader">
            <h2 >Notícias e Eventos</h2>
            <div className="NewsEventsPanelSubtitle">
                Aqui estão as nossas notícias e eventos mais recentes!
            </div>
        </div>
        <div className="NewsEventsPanel">
            <div className="NewsEventsColumn">
                <div className="NewsEventsHeader">
                    <h3>Notícias</h3>
                    <a href="/news" className="NewsEventsMore">Ver Mais</a>
                </div>
                {newsLoading && <div>A carregar notícias...</div>}
                {newsError && <div>Erro ao carregar notícias.</div>}
                {news.map((item) => (
                    <NewsEventCard
                        key={item._id}
                        {...item}
                        type="news"
                        articleId={item._id}
                    />
                ))}
            </div>
            <div className="NewsEventsColumn">
                <div className="NewsEventsHeader">
                    <h3>Eventos</h3>
                    <a href="/events" className="NewsEventsMore">Ver Mais</a>
            </div>
                {eventsLoading && <div>A carregar eventos...</div>}
                {eventsError && <div>Erro ao carregar eventos.</div>}
                {events.map((item, idx) => (
                    <NewsEventCard
                        key={idx}
                        {...item}
                        type="event"
                    />
                ))}
            </div>
        </div>
    </>
  );
};

export default NewsEventsPanel;