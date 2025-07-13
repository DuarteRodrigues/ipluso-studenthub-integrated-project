/**
 * @file NewsCard.tsx
 * @description Component for displaying a news article card.
 * 
 * @component NewsCard
 * @param {Object} props - The properties for the news card.
 * @param {Object} props.article - The article data to display.
 * @param {string} props.article.title - The title of the article.
 * @param {string} props.article.summary - A brief summary of the article.
 * @param {string} [props.article.image] - The URL of the article's image.
 * @param {string} [props.article.date] - The publication date of the article.
 * @param {string[]} [props.article.tags] - Tags associated with the article.
 * @returns {JSX.Element} A card displaying the article's title, summary, and optionally an image and date.
 */

// Import React
import React from 'react';
import { Link } from "react-router-dom";

// Import Styles
import './NewsCard.css';

// Declare types for props
type NewsCardProps = {
  article: {
    _id: string; // Unique identifier for the article
    thumbnail: string; // URL of the article's thumbnail image
    title: string; // Title of the article
    description: string; // Description of the article
    date: string; // Publication date
    tags: string[]; // Tags associated with the article
    };
};

const NewsCard: React.FC<NewsCardProps> = ({article}) => {

  const linkPath = `/news/article/${article._id}`;

  return (
    <Link to={linkPath} className="NewsCardLink">
        <div className="NewsCard">
            <img src={article.thumbnail} alt={article.title} className="NewsCardThumb" />
            <div className="NewsCardContent">
                <div className="NewsCardTitle">{article.title}</div>
                <div className="NewsCardDesc">{article.description}</div>
                <div className="NewsCardMeta">
                    <span className="NewsCardDate">{article.date}</span>
                    {article.tags && article.tags.length > 0 && (
                        <div className="NewsCardTags">
                        {article.tags.map((tag, index) => (
                        <span key={index} className="NewsCardTag">{tag}</span>
                        ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Link>
  );
};

export default NewsCard