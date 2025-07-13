/**
 * @file ArticlesLayout.tsx
 * @description Layout component for displaying articles, including news and events.
 * 
 * @layout ArticlesLayout
 * @param {Object} props - The properties for the layout.
 * @param {string} props.apiPath - The API endpoint to fetch articles from.
 * @param {string[]} props.tags - The tags to filter articles by.
 * @param {string} props.pageTitle - The title of the page.
 * @param {string} props.pageSubtitle - The subtitle of the page.
 * @param {'news' | 'events'} props.cardType - The type of articles to display.
 * @param {string} [props.layoutClassName] - Additional class names for the layout.
 * @param {string} [props.tagsBarClassName] - Additional class names for the tags bar.
 * @param {string} [props.resultsCountClassName] - Additional class names for the results count.
 * @param {string} [props.gridClassName] - Additional class names for the grid.
 * @returns {JSX.Element} A layout displaying a list of articles.
 */

// Import Packages
import React, { useEffect, useState, useRef } from 'react';

// Import Components
import NewsCard from '../components/NewsCard/NewsCard.tsx';
import EventsCard from '../components/EventsCard/EventsCard.tsx';
import InternshipsCard from '../components/InternshipsCard/InternshipsCard.tsx';

// Import Styles
import '../styles/ArticlesLayout.css';

type ArticlesLayoutProps = {
    articles: any[]; // Array of articles to display
    articlesLoading: boolean; // Loading state for articles
    articlesError: any; // Error state for articles
    tags: string[];
    pageTitle: string;
    pageSubtitle: string;
    cardType: 'news' | 'events' | 'internships'; // Type of articles to display
    layoutClassName?: string;
    tagsBarClassName?: string;
    resultsCountClassName?: string;
    gridClassName?: string;
};

const PAGE_SIZE = 20;

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({
    articles, articlesLoading, articlesError,
    tags, pageTitle, pageSubtitle, cardType,
    layoutClassName = '',tagsBarClassName = '',
    resultsCountClassName = '', gridClassName = '' }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(false);
    const prevFilteredArticlesLength = useRef(0);

    // Filter articles: show all if no tag selected, else show those with at least one selected tag
    const filteredArticles = selectedTags.length === 0
        ? articles
        : articles.filter(article =>
            article.tags && selectedTags.every(tag => article.tags.includes(tag))
    );

    const dynamicTags = Array.from(
    new Set(
        articles
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
                {filteredArticles.length}{" "}
                {cardType === "news" ? "notícia" : 
                 cardType === "events" ? "evento" : 
                 cardType === "internships" ? "estágio" :
                 "artigo"}{" "}
                {filteredArticles.length !== 1 ? "s" : ""} {" "}
                { cardType === "news" ? "encontrada" : "encontrado"}
                {filteredArticles.length !== 1 ? "s" : ""}
            </div>
            {articlesLoading && <div>A carregar {cardType === "news" ? "notícias" : "eventos"}...</div>}
            {articlesError && <div>Erro ao carregar {cardType === "news" ? "notícias" : "eventos"}.</div>}
            <div className={`ArticlesGrid ${gridClassName}`}>
                {filteredArticles.slice(0, visibleCount).map(article => {
                    if (cardType === "news") {
                        return <NewsCard key={article._id} article={article} />;
                    }
                    if (cardType === "events") {
                        return <EventsCard key={article._id} article={article} />;
                    }
                    if (cardType === "internships") {
                        return <InternshipsCard key={article._id} article={article} />;
                    }
                })}
            </div>
        </div>
    )
}

export default ArticlesLayout;