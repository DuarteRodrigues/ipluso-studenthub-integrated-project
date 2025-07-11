/**
 * @file NewsLayout.tsx
 * @description Layout component for the News section of the IPLuso StudentHub Integrated Project.
 * This component provides a consistent layout for the list of news articles,
 * including a header and footer, and renders the news articles passed as children.
 * 
 * @layout NewsLayout
 * @returns {JSX.Element} A layout displaying the news articles with a header and footer.
 */

// Import Packages
import React, { useState, useEffect, useRef } from 'react';

// Import Components
import NewsEventCard from '../components/NewsEventCard/NewsEventCard.tsx';

// Import Utilities
import { sortMostRecent } from '../utils/articleManipulation.tsx';

// Import Styles
import '../styles/NewsLayout.css';

const TAGS = ["EET", "ECIA", "ESCAD", "ESEL", "ESPA", "ERISA"];
const PAGE_SIZE = 20;

const NewsLayout: React.FC = () => {
    const [newsData, setNewsData] = useState<any[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE); // Number of news articles to show initially
    const [loading, setLoading] = useState(false);
    const prevFilteredNewsLength = useRef(0);

    useEffect(() => {
        console.log("[News] Fetching news data...");
        fetch("http://localhost:5000/news")
            .then(res => {
                console.log("Fetch response status:", res.status)
                return res.json();
            })
            .then(data => {setNewsData(sortMostRecent(data))
                console.log("[News] Data fetched successfully:", data.length, "articles");
                setNewsData(sortMostRecent(data));
            })
            .catch((err) => {
                console.error("Error fetching news data:", err);
                setNewsData([]);
            });
    }, []);

    // Filter news: show all if no tag selected, else show those with at least one selected tag
    const filteredNews = selectedTags.length === 0
        ? newsData
        : newsData.filter(article =>
            article.tags && selectedTags.every(tag => article.tags.includes(tag))
    );

    // Reset visibleCount when tags change
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
    }, [selectedTags]);

    // InfiniteScroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
                visibleCount < filteredNews.length && !loading
            ) {
                setLoading(true);
                setTimeout(() => {
                    setVisibleCount(v => Math.min(v + PAGE_SIZE, filteredNews.length));
                    setLoading(false);
                }, 1000) // 1 second delay to simulate loading
                
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCount, filteredNews.length, loading]);

    // Reset loading if filter changes and filteredNews shrinks
    useEffect(() => {
        if (filteredNews.length !== prevFilteredNewsLength.current) {
            setLoading(false);
            prevFilteredNewsLength.current = filteredNews.length;
        }
    }, [filteredNews.length]);

    // Toggle tag selection
    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
            ? prev.filter(t => t !== tag)
            : [...prev, tag]
        );
    };

    return (
        <div className="NewsLayout">
            <h1>Notícias</h1>
            <h2 className="NewsSubtitle">Esta é a página de notícias</h2>
            <div className="NewsTagsBar">
                {TAGS.map(tag => (
                <button
                    key={tag}
                    className={selectedTags.includes(tag) ? "NewsTagBtn active" : "NewsTagBtn"}
                    onClick={() => toggleTag(tag)}
                >
                {tag}
                </button>
            ))}
            <button
                className={selectedTags.length === 0 ? "NewsTagBtn active" : "NewsTagBtn"}
            onClick={() => setSelectedTags([])}
            >
            Todas
            </button>
        </div>
        <div className="NewsResultsCount">
            {filteredNews.length} notícia{filteredNews.length !== 1 ? "s" : ""} encontrada{filteredNews.length !== 1 ? "s" : ""}
        </div>
        <div className="NewsGrid">
            {filteredNews.map(article => (
                <NewsEventCard
                key={article._id}
                {...article}
                type="news"
                articleId = {article._id}
            />
            ))}
        </div>
    </div>
    );
};

export default NewsLayout