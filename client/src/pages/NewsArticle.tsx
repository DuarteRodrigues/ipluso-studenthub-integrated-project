/**
 * @file Article.tsx
 * @description Component for displaying a single article (news or event) in detail.
 * 
 * @page Article
 * @returns {JSX.Element} A page displaying the article's title, content, and author.
 */

// Import Packages
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import Components
import Headers from '../components/Header/Header.tsx';
import NewsArticleLayout from '../layouts/NewsArticleLayout.tsx';
import Footer from '../components/Footer/Footer.tsx';

const NewsArticlePage: React.FC = () => {

  const { id } = useParams<{ id: string}>();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/news/article/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) return <div> Artigo não encontrado.</div>;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Headers/>
        <div style={{ flex: "1"}}>
          <NewsArticleLayout article={article} />
        </div>
      <Footer/>
    </div>
  );
};

export default NewsArticlePage