/**
 * @file EventsLayout.tsx
 * @description Layout component for the Events page in the IPLuso StudentHub Integrated Project.
 * 
 * @layout EventsLayout
 * @returns {JSX.Element} A layout component that wraps the Events page content.
 */

// Import Packages
import React, { useState, useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query';

// Import Components
import NewsEventCard from '../components/NewsEventCard/NewsEventCard.tsx'

// Import Utilities
import { sortMostRecent } from '../utils/articleManipulation.tsx'

// Import Styles
import '../styles/EventsLayout.css'

const TAGS = ["EET", "ECIA", "ESCAD", "ESEL", "ESPA", "ERISA"];
const apiURL = process.env.REACT_APP_API_URL;
const PAGE_SIZE = 20;

  // Fetch events from backend
const fetchEvents = async () => {
  const res = await fetch(`${apiURL}/events`);
  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }
  return res.json();
};

const EventsLayout: React.FC = () => {

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE); // Number of events to show initially
  const [loading, setLoading] = useState(false);
  const prevFilteredEventsLength = useRef(0);

  const  { data: eventData = [], isLoading: eventsLoading, error: eventsError } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  // Sort events by most recent
  const sortedEvents = sortMostRecent(eventData);

  // Filter events: show all if no tag selected, else show those with at least one selected tag
  const filteredEvents = selectedTags.length === 0
    ? sortedEvents
    : sortedEvents.filter(event =>
        event.tags && selectedTags.every(tag => event.tags.includes(tag))
  );

  // Reset visibleCount when tags change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    prevFilteredEventsLength.current = 0;
  }, [selectedTags]);

  // InfiniteScroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        visibleCount < filteredEvents.length && !loading
      ) {
        setLoading(true);
        setTimeout(() => {
          setVisibleCount(v => Math.min(v + PAGE_SIZE, filteredEvents.length));
          setLoading(false);
        }, 1000); // Simulate network delay
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, filteredEvents.length, loading]);

  // Reset loading if filter changes and filteredEvents shrinks
  useEffect(() => {
   if (filteredEvents.length !== prevFilteredEventsLength.current) {
      setLoading(false);
      prevFilteredEventsLength.current = filteredEvents.length;
    }
  }, [filteredEvents.length]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
      ? prev.filter(t => t !== tag)
      : [...prev, tag]
    );
  };

  return (
    <div className="EventsLayout">
        <h1>Eventos</h1>
        <h2 className="EventsSubtitle">Esta é a página de notícias</h2>
        <div className="EventsTagsBar">
          {TAGS.map(tag => (
            <button
              key={tag}
                className={selectedTags.includes(tag) ? "EventsTagBtn active" : "EventsTagBtn"}
                    onClick={() => toggleTag(tag)}
                >
                {tag}
                </button>
                ))}
                <button
                    className={selectedTags.length === 0 ? "EventsTagBtn active" : "EventsTagBtn"}
                onClick={() => setSelectedTags([])}
                >
                Todas
                </button>
        </div>
        <div className="EventsResultsCount">
          {filteredEvents.length} evento{filteredEvents.length !== 1 ? "s" : ""} encontrado{filteredEvents.length !== 1 ? "s" : ""}
        </div>
        {eventsLoading && <div>A carregar notícias...</div>}
        {eventsError && <div>Erro ao carregar notícias.</div>}
        <div className="EventsResults">
              {filteredEvents.map(article => (
                <NewsEventCard
                    key={article._id}
                    {...article}
                    type="event"
                    articleId={article._id}
                />
              ))}
        </div>
    </div>
  )
}

export default EventsLayout