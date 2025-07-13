/**
 * @file EventsCard.tsx
 * @description Component for displaying an event card.
 * 
 * @component EventsCard
 * @param {Object} props - The properties for the event card.
 * @param {Object} props.event - The event data to display.
 * @param {string} props.event.title - The title of the event.
 * @param {string} props.event.description - A brief description of the event.
 * @param {string} [props.event.image] - The URL of the event's image.
 * @param {string} [props.event.date] - The date of the event.
 * @param {string[]} [props.event.tags] - Tags associated with the event.
 * @returns {JSX.Element} A card displaying the event's title, description, image, date, and location.
 */

// Import React
import React from 'react'
import { Link } from "react-router-dom";

// Declare types for props
type EventsCardProps = {
  article: {
    _id: string; // Unique identifier for the event
    thumbnail: string; // URL of the event's thumbnail image
    title: string; // Title of the event
    description: string; // Description of the event
    date: string; // Date of the event
    tags: string[]; // Tags associated with the event
  };
};

const EventsCard: React.FC<EventsCardProps> = ({ article }) => {

  const linkPath = `/events/article/${article._id}`;

  return (
    <Link to={linkPath} className="EventsCardLink">
        <div className="EventsCard">
            <img src={article.thumbnail} alt={article.title} className="EventsCardThumb" />
            <div className="EventsCardContent">
                <h4 className="EventsCardTitle">{article.title}</h4>
                <p className="EventsCardDesc">{article.description}</p>
                <span className="EventsCardDate">{article.date}</span>
                {article.tags && article.tags.length > 0 && (
                    <div className="EventsCardTags">
                        {article.tags.map((tag, index) => (
                            <span key={index} className="EventsCardTag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </Link>
  );
};

export default EventsCard