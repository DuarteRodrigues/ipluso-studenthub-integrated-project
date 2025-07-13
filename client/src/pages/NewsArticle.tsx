/**
 * @file NewsArticle.tsx
 * @description Component for displaying a single article (news or event) in detail.
 * 
 * @page NewsArticle
 * @returns {JSX.Element} A page displaying the article's title, content, and author.
 */

// Import Packages
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery} from '@tanstack/react-query';

// Import Components
import Headers from '../components/Header/Header.tsx';
import NewsArticleLayout from '../layouts/NewsArticleLayout.tsx';
import Footer from '../components/Footer/Footer.tsx';

// Import Services
import { fetchArticle } from '../services/api.tsx';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const NewsArticlePage: React.FC = () => {

  const { id } = useParams<{ id: string}>();

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['news-article', id],
    queryFn: () => fetchArticle(apiURL, "news", id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <div>A carregar artigo...</div>;
  if (error || !article) return <div> Artigo não encontrado.</div>;

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