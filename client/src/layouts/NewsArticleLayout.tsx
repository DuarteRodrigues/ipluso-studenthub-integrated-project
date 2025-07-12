/**
 * @file NewsArticleLayout.tsx
 * @description Layout component for displaying a news article.
 * 
 * @layout NewsArticleLayout
 * @returns {JSX.Element} A layout displaying the article's title, content, and
 */

// Import Packages
import React, { useState, useEffect } from 'react';

// Import Context
import { useUser } from '../store/UserContext.tsx';

// Import Styles
import '../styles/NewsArticleLayout.css';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

// Define NewsArticleLayout types
type NewsArticleLayoutProps = {
    article: {
        _id: number;
        thumbnail: string;
        title: string;
        content: string;
        author: string;
        date: string;
        tags: string[];
    };
};

const feedBackTypes = [
    { type: "like", label: "👍 Gosto/Interessa-me" },
    { type: "wow", label: "😮 Wow!" },
    { type: "congrats", label: "👏 Parabéns!" }
]

const NewsArticleLayout: React.FC<NewsArticleLayoutProps> = ({ article }) => {

  const { user } = useUser();

  console.log("User:", user);
  const [userFeedback, setUserFeedback] = useState<string | null>(null);
  const [feedbackCount, setFeedbackCount] = useState<{ [key: string]: number }>({});
  const [initialFeedback, setInitialFeedback] = useState<string | null>(null);
  
    const handleFeedback = (type: string) => {
        let newFeedback = null;
        let newCounts = { ...feedbackCount };

        if (userFeedback === type) {
            // Untoggle: remove feedback
            newCounts[type] = (newCounts[type] || 1) - 1;
            newFeedback = null;
        } else {
            // Set new feedback
            if (userFeedback) newCounts[userFeedback] = (newCounts[userFeedback] || 1) - 1;
            newCounts[type] = (newCounts[type] || 0) + 1;
            newFeedback = type;
        }

        setFeedbackCount(newCounts);
        setUserFeedback(newFeedback);

        // Update backend immediately
        fetch(`${apiURL}/news/article/${article._id}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.userId, type: newFeedback }),
        });
    };

  useEffect(() => {
    // Fetch feedback counts and user feedback for this article
    fetch(`${apiURL}/news/article/${article._id}/feedback?userId=${user.userId}`)
        .then(res => res.json())
        .then(data => {
            setFeedbackCount(data.feedbackCount);
            setUserFeedback(data.userFeedback);
            setInitialFeedback(data.userFeedback); // Save the initial feedback value
        });
  }, [article._id, user.userId]);

  return (
        <div className="NewsArticlePage">
            <img src={article.thumbnail} alt={article.title} className="ArticleThumbnail" />
            <h1 className="ArticleTitle">{article.title}</h1>
            <div className="ArticleContent">{article.content}</div>
            {user?.username?.startsWith("a") && (
                <div className="ArticleFeedbackButtons">
                    {feedBackTypes.map(({type, label})=> (
                        <button
                            key={type}
                            className={`FeedbackButton ${userFeedback === type ? 'active' : ''}`}
                            onClick={() => handleFeedback(type)}
                            >
                            {label} ({feedbackCount[type] || 0})
                        </button>
                    ))}
                </div>
            )}
            {article.tags && article.tags.length > 0 && (
                <div className="ArticleTags">
                    <strong> Tags: </strong> {" "}
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

export default NewsArticleLayout