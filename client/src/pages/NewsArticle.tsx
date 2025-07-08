/**
 * @file Article.tsx
 * @description Component for displaying a single article (news or event) in detail.
 * 
 * @page Article
 * @returns {JSX.Element} A page displaying the article's title, content, and author.
 */

// Import Packages
import React from 'react';
import { useParams } from 'react-router-dom';

// Import needed Data
import news from '../utils/NewsTestData.tsx';

// Import Components
import Headers from '../components/Header/Header.tsx';

const NewsArticlePage: React.FC = () => {

  const { id } = useParams<{ id: string}>();
  const article = news.find(n => n.id === Number(id));

  if (!article) return <div> Artigo não encontrado.</div>;

  return (
    <div>
      <Headers/>
      <div className="NewsArticlePage">
        <img src={article.thumbnail} alt={article.title} className="ArticleThumbnail" />
        <h1 className="ArticleTitle">{article.title}</h1>
        <div className="ArticleContent">{article.content}</div>
        <div className="ArticleMeta">
          <span className="ArticleAuthor">{article.author}</span>
          <span className="ArticleDate">{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage