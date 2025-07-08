/**
 * @file EventArticleLayout.tsx
 * @description Layout component for displaying a single event article in detail.
 * 
 * @Layout EventArticleLayout
 * @returns {JSX.Element} A layout displaying the event article's content.
 */

// Import Packages
import React from 'react';

// Define EventArticleLayout types
type EventArticleLayoutProps = {
  article: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    date: string;
    };
};

const EventArticleLayout: React.FC<EventArticleLayoutProps> = ({article}) => {
  return (
    <div className="EventsArticlePage">
            <img src={article.thumbnail} alt={article.title} className="ArticleThumbnail" />
            <h1 className="ArticleTitle">{article.title}</h1>
            <div className="ArticleContent">{article.content}</div>
            <div className="ArticleMeta">
                <span className="ArticleAuthor">{article.author}</span>
                <span className="ArticleDate">{article.date}</span>
            </div>
      </div>
  )
}

export default EventArticleLayout