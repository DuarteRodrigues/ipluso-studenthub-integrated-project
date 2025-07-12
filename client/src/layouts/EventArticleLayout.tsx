/**
 * @file EventArticleLayout.tsx
 * @description Layout component for displaying a single event article in detail.
 * 
 * @Layout EventArticleLayout
 * @returns {JSX.Element} A layout displaying the event article's content.
 */

// Import Packages
import React from 'react';

// Import Styles
import '../styles/EventArticleLayout.css';

// Define EventArticleLayout types
type EventArticleLayoutProps = {
  article: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    };
};

const EventArticleLayout: React.FC<EventArticleLayoutProps> = ({article}) => {
  return (
    <div className="EventsArticlePage">
            <img src={article.thumbnail} alt={article.title} className="ArticleThumbnail" />
            <h1 className="ArticleTitle">{article.title}</h1>
            <div className="ArticleContent">{article.content}</div>
            
            {article.tags && article.tags.length > 0 && (
              <div className="ArticleTags">
                <strong>Tags:</strong>{" "}
                <div className="ArticleTagsList">
                  {article.tags.map((tag) => (
                  <span key={tag} className="ArticleTag">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="ArticleMeta">
                <span className="ArticleAuthor">{article.author}</span>
                <span className="ArticleDate">{article.date}</span>
            </div>
      </div>
  )
}

export default EventArticleLayout