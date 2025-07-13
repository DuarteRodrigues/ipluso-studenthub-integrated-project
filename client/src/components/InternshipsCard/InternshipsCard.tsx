/**
 * @file InternshipsCard.tsx
 * @description Component for displaying an internship card.
 * 
 * @component InternshipsCard
 * @param {Object} props - The properties for the internship card.
 * @param {Object} props.internship - The internship data to display.
 * @param {string} props.internship.title - The title of the internship.
 * @param {string} props.internship.description - A brief description of the internship.
 * @param {string} props.
 */

// Import React
import React from 'react';
import { Link } from "react-router-dom";

// Declare types for props
type InternshipsCardProps = {
  article: {
    _id: string; // Unique identifier for the internship
    title: string; // Title of the internship
    description: string; // Description of the internship
    oportunityYear: number; // Year of the internship opportunity
    tags: any[]; // Tags associated with the internship
  };
};

const InternshipsCard: React.FC<InternshipsCardProps> = ({ article }) => {

  const linkPath = `/internships/article/${article._id}`;

  return (
    <Link to={linkPath} className="InternshipsCardLink">
        <div className="EventsCard">
            <div className="EventsCardContent">
                <h4 className="EventsCardTitle">{article.title}</h4>
                <p className="EventsCardDesc">{article.description}</p>
                <span className="EventsCardDate">{article.oportunityYear}</span>
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
  )
}

export default InternshipsCard