/**
 * @file NewsEventCard.tsx
 * @description Component for displaying a card with news or event information.
 * 
 * @component NewsEventCard
 * @returns {JSX.Element} A card displaying news or event information.
 */

// Import Packages
import React from "react";
import { Link } from "react-router-dom";

// Import Styles
import "./NewsEventCard.css";

// Declare types for props
type NewsEventCardProps = {
    articleId: string; // Unique identifier for the news or event

    title: string;
    description: string;
    date: string;
    thumbnail: string; // URL for the thumbnail image
    type: "news" | "event"; // Type of the card, either news or event
};

const NewsEventCard: React.FC<NewsEventCardProps> = ({
  articleId, thumbnail, title, description, date, type}) => {

  const linkPath = type === "news" 
  ? `/news/article/${articleId}` 
  : `/events/article/${articleId}`;

  return (
    <Link to={linkPath} className="NewsEventCardLink">
        <div className = "NewsEventCard">
            <img src = {thumbnail} alt= {title} className="NewsEventThumb"/>
            <div className="NewsEventContent">
                <h4 className="NewsEventTitle">{title}</h4>
                <p className="NewsEventDesc">{description}</p>
                <span className="NewsEventDate">{date}</span>
            </div>
        </div>
    </Link>
  );
};

export default NewsEventCard;