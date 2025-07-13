/**
 * @file EventArticleLayout.tsx
 * @description Layout component for displaying a single event article in detail.
 * 
 * @layout EventArticleLayout
 * @param {Object} props - The properties for the layout.
 * @param {Object} props.article - The article data to display.
 * @param {number} props.article.id - The unique identifier for the article.
 * @param {string} props.article.thumbnail - The URL of the article's thumbnail image.
 * @param {string} props.article.title - The title of the article.
 * @param {string} props.article.description - A brief description of the article.
 * @param {string} props.article.date - The date of the article.
 * @param {string[]} props.article.tags - The tags associated with the article.
 * @param {string} [props.article.author] - The author of the article.
 * @param {string} [props.article.content] - The content of the article.
 * @returns {JSX.Element} A layout displaying the event article's content.
 */


// Import Packages
import React from 'react';

// Import Components
import ArticleFeedbackButtons from '../features/ArticleFeedbackButtons/ArticleFeedbackButtons.tsx'

// Import Hooks
import { useArticleFeedback } from '../hooks/useArticleFeedback.tsx';

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

  // Use the custom hook, passing user?.userId (may be undefined if not logged in)
  const { userFeedback, feedbackCount, handleFeedback } = useArticleFeedback(
    apiURL,
    String(article._id),
    user?.userId ?? "",
    "events/article"
  );

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
                  <span 
                    key={tag} 
                    className="ArticleTag">{tag}</span>
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

export default EventArticleLayout;