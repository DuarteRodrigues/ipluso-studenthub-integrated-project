/**
 * @file NewsEventsPanel.tsx
 * @description
 * 
 * @component NewsEventsPanel
 * @returns {JSX.Element} A panel displaying news and events.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query"

// Import Components
import NewsEventCard from "../NewsEventCard/NewsEventCard.tsx";

// Import Utilities
import {sortMostRecent} from "../../utils/articleManipulation.tsx";

// Import Styles
import "./NewsEventsPanel.css";

const apiURL = process.env.REACT_APP_API_URL;

// Fetch news from backend
const fetchNews = async () => {
    const res = await fetch(`${apiURL}/news`);
    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }
    return res.json()
}

// Fetch events from backend
const fetchEvents = async () => {
    const res = await fetch(`${apiURL}/events`);
    if (!res.ok) {
        throw new Error("Failed to fetch events");
    }
    return res.json()
}

const NewsEventsPanel:React.FC = () => {

    // Use React Query to fetch and cache news
    const { data: news = [], isLoading: newsLoading, error: newsError } = useQuery ({
        queryKey: ['news'],
        queryFn: fetchNews,
        staleTime: 1000 * 60 * 2, // 2 minutes
        refetchOnWindowFocus: true // (Default, but explicit for clarity)
    });

    // Use React Query to fetch and cache events
    const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery ({
        queryKey: ['events'],
        queryFn: fetchEvents,
        staleTime: 1000 * 60 * 2, // 2 minutes
        refetchOnWindowFocus: true // (Default, but explicit for clarity)
    });

    const sortedNews = sortMostRecent(news).slice(0, 3); // Get the 3 most recent news
    const sortedEvents = sortMostRecent(events).slice(0, 3); // Get the 3 most recent events

    return (
    <>
        <div className="NewsEventsPanelHeader">
            <h2 >Notícias e Eventos</h2>
            <div style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
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
                {sortedNews.map((item) => (
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
                {sortedEvents.map((item, idx) => (
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