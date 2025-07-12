/**
 * @file ArticlesLayout.tsx
 * @description Layout component for displaying articles, including news and events.
 * 
 * @layout ArticlesLayout
 * @returns {JSX.Element} A layout displaying a list of articles.
 */

// Import Packages
import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

// Import Components
import NewsEventCard from '../components/NewsEventCard/NewsEventCard.tsx';

// Import Utilities
import { sortMostRecent } from '../utils/articleManipulation.tsx';

// Import Styles
import '../styles/ArticlesLayout.css';

type ArticlesLayoutProps = {
    apiPath: string;
    tags: string[];
    pageTitle: string;
    pageSubtitle: string;
    cardType: 'news' | 'events';
    layoutClassName?: string;
    tagsBarClassName?: string;
    resultsCountClassName?: string;
    gridClassName?: string;
};

const PAGE_SIZE = 20;
const apiURL = process.env.REACT_APP_API_URL;

// Fetch events from backend
const fetchArticles = async (apiPath: string) => {
    const res = await fetch(`${apiURL}/${apiPath}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch ${apiPath}`);
    }
    return res.json();
}

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({
    apiPath, tags, pageTitle, pageSubtitle, cardType,
    layoutClassName = '',tagsBarClassName = '',
    resultsCountClassName = '', gridClassName = '' }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(false);
    const prevFilteredArticlesLength = useRef(0);

    const { data: articlesData = [], isLoading, error } = useQuery({
        queryKey: [apiPath],
        queryFn: () => fetchArticles(apiPath),
        staleTime: 1000 * 60 * 2  // 2 minutes
        , refetchOnWindowFocus: true // (Default, but explicit for clarity)
    });

    // Sort articles by most recent
    const sortedArticles = sortMostRecent(articlesData);

    // Filter articles: show all if no tag selected, else show those with at least one selected tag
    const filteredArticles = selectedTags.length === 0
        ? sortedArticles
        : sortedArticles.filter(article =>
            article.tags && selectedTags.every(tag => article.tags.includes(tag))
    );

    const dynamicTags = Array.from(
    new Set(
        sortedArticles
            .flatMap(article => article.tags || [])
            .filter(tag => !tags.includes(tag))
        )
    );

    // Reset visibleCount when tags change
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
        prevFilteredArticlesLength.current = 0;
    }, [selectedTags]);

    // InfiniteScroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
                visibleCount < filteredArticles.length && !loading
            ) {
                setLoading(true);
                setTimeout(() => {
                setVisibleCount(v => Math.min(v + PAGE_SIZE, filteredArticles.length));
                setLoading(false);
                }, 1000);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCount, filteredArticles.length, loading]);

    // Reset loading if filter changes and filteredArticles shrinks
    useEffect(() => {
        if (filteredArticles.length !== prevFilteredArticlesLength.current) {
            setLoading(false);
            prevFilteredArticlesLength.current = filteredArticles.length;
        }
    }, [filteredArticles.length]);

    // Toggle tag selection
    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
            ? prev.filter(t => t !== tag)
            : [...prev, tag]
        );
    };

    return (
        <div className={`ArticlesLayout ${layoutClassName}`}>
            <h1>{pageTitle}</h1>
            <h2 className="ArticlesSubtitle">{pageSubtitle}</h2>
            <p style={{marginBottom: "0.3em", fontWeight: 500}}>Unidades Orgânicas:</p>
            <div className={`ArticlesTagsBar ${tagsBarClassName}`}>
                {tags.map(tag => (
                    <button
                        key={tag}
                        className={selectedTags.includes(tag) ? "ArticlesTagBtn active" : "ArticlesTagBtn"}
                        onClick={() => toggleTag(tag)}
                    >
                    {tag}
                    </button>
                ))}
            </div>
            <p style={{marginBottom: "0.3em", fontWeight: 500}}>Tags:</p>

            <div className="ArticlesTagsBar secondary">
                <button
                    className={selectedTags.length === 0 ? "ArticlesTagBtn active" : "ArticlesTagBtn"}
                    onClick={() => setSelectedTags([])}
                >
                    Todas
                </button>
                {dynamicTags.map(tag => (
                    <button 
                        key={tag}
                        className={selectedTags.includes(tag) ? "ArticlesTagBtn active" : "ArticlesTagBtn"}
                        onClick={() => toggleTag(tag)}
                    >
                        {tag}
                    </button>
                 ))}
            </div>

            <div className={`ArticlesResultsCount ${resultsCountClassName}`}>
                {filteredArticles.length} {cardType === "news" ? "notícia" : "evento"}
                {filteredArticles.length !== 1 ? "s" : ""} encontrada
                {filteredArticles.length !== 1 ? "s" : ""}
            </div>
            {isLoading && <div>A carregar {cardType === "news" ? "notícias" : "eventos"}...</div>}
            {error && <div>Erro ao carregar {cardType === "news" ? "notícias" : "eventos"}.</div>}
            <div className={`ArticlesGrid ${gridClassName}`}>
                {filteredArticles.slice(0, visibleCount).map(article => (
                    <NewsEventCard
                        key={article._id}
                        {...article}
                        type={cardType}
                        articleId={article._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default ArticlesLayout;