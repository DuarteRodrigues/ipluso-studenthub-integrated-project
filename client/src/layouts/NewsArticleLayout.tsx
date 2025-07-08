/**
 * @file NewsArticleLayout.tsx
 * @description Layout component for displaying a news article.
 * 
 * @layout NewsArticleLayout
 * @returns {JSX.Element} A layout displaying the article's title, content, and
 */

// Import Packages
import React from 'react';

// Define NewsArticleLayout types
type NewsArticleLayoutProps = {
    article: {
        id: number;
        thumbnail: string;
        title: string;
        content: string;
        author: string;
        date: string;
    };
};

const NewsArticleLayout: React.FC<NewsArticleLayoutProps> = ({ article }) => {
  return (
        <div className="NewsArticlePage">
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

export default NewsArticleLayout