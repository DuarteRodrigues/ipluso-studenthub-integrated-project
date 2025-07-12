/**
 * @file EventArticleLayout.tsx
 * @description Layout component for displaying a single event article in detail.
 * 
 * @Layout EventArticleLayout
 * @returns {JSX.Element} A layout displaying the event article's content.
 */

// Import Packages
import React, { useEffect, useState } from 'react';

// Import Components
import ArticleFeedbackButtons from '../features/ArticleFeedbackButtons/ArticleFeedbackButtons.tsx'

// Import Context
import { useUser } from '../store/UserContext.tsx';

// Import Styles
import '../styles/EventArticleLayout.css';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

// Define EventArticleLayout types
type EventArticleLayoutProps = {
  article: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    author?: string;
    content?: string;
    };
};

const feedBackTypes = [
    { type: "like", label: "👍 Gosto/Interessa-me" },
    { type: "wow", label: "😮 Wow!" },
    { type: "congrats", label: "👏 Parabéns!" }
];

const EventArticleLayout: React.FC<EventArticleLayoutProps> = ({ article }) => {

  const { user } = useUser();

  const [userFeedback, setUserFeedback] = useState<string | null>(null);
  const [feedbackCount, setFeedbackCount] = useState<{ [key: string] : number}> ({});
  const [initialFeedback, setInitialFeedback] = useState<string | null>(null);

  const handleFeedback = (type: string) => {
    let newFeedback: string | null = null;
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

    //Update backend immediately
    fetch(`${apiURL}/events/article/${article._id}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.userId, type: newFeedback }),
    });
  };

  useEffect(() => {
    // Fetch feedback counts and user feedback for the article
    fetch(`${apiURL}/events/article/${article._id}/feedback?userId=${user.userId}`)
      .then(res => res.json())
      .then(data => {
        setFeedbackCount(data.feedbackCount);
        setUserFeedback(data.userFeedback);
      });
    }, [article._id, user.userId]);

  return (
    <div className="EventsArticlePage">
      <img src={article.thumbnail} alt={article.title} className="ArticleThumbnail" />
      <h1 className="ArticleTitle">{article.title}</h1>
      <div className="ArticleContent">{article.content}</div>

            {user?.username?.startsWith("a") && (
                <ArticleFeedbackButtons
                    feedbackTypes={feedBackTypes}
                    userFeedback={userFeedback}
                    feedbackCount={feedbackCount}
                    onFeedback={handleFeedback}
                />
            )}
            
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
                <span className="ArticleDate">{article.date}</span>
            </div>
      </div>
  )
}

export default EventArticleLayout