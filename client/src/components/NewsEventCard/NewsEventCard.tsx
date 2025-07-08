/**
 * @file NewsEventCard.tsx
 * @description Component for displaying news and event cards on the homepage.
 * 
 * @component
 * @returns {JSX.Element} A card displaying news or event information.
 */

// Import Packages
import React from "react";
import { Link } from "react-router-dom";

// Import Styles
import "./NewsEventCard.css";

// Declare types for props
type NewsEventCardProps = {
    id: string; // Unique identifier for the news or event
    thumbnail: string;
    title: string;
    description: string;
    date: string;
    type: "news" | "event"; // Type of the card, either news or event
};

const NewsEventCard: React.FC<NewsEventCardProps> = ({
  id, thumbnail, title, description, date, type}) => {

  const linkPath = type === "news" 
  ? `/news/article/${id}` 
  : `/events/article/${id}`;

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