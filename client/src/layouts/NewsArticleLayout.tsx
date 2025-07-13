/**
 * @file NewsArticleLayout.tsx
 * @description Layout component for displaying a news article.
 * 
 * @layout NewsArticleLayout
 * @param {Object} props - The properties for the layout.
 * @param {Object} props.article - The article data to display.
 * @param {number} props.article._id - The unique identifier for the article.
 * @param {string} props.article.thumbnail - The URL of the article's thumbnail image.
 * @param {string} props.article.title - The title of the article.
 * @param {string} props.article.content - The content of the article.
 * @param {string} props.article.author - The author of the article.
 * @param {string} props.article.date - The date of the article.
 * @param {string[]} props.article.tags - The tags associated with the article.
 * @returns {JSX.Element} A layout displaying the article's title, content, and
 */

// Import Packages
import React from 'react';

// Import Features
import ArticleFeedbackButtons from '../features/ArticleFeedbackButtons/ArticleFeedbackButtons.tsx';

// Import Hooks
import { useArticleFeedback } from '../hooks/useArticleFeedback.tsx';

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

    // Use the custom hook, passing user?.userId (may be undefined if not logged in)
    const { userFeedback, feedbackCount, handleFeedback } = useArticleFeedback(
        apiURL,
        String(article._id),
        user?.userId ?? "",
        "news/article"
    );

    return (
        <div className="NewsArticlePage">
            <img src={article.thumbnail} alt={article.title} className="ArticleThumbnail" />
            <h1 className="ArticleTitle">{article.title}</h1>
            <div className="ArticleContent">{article.content}</div>

            {user?.username?.startsWith("a") && (
                <ArticleFeedbackButtons
                    feedbackTypes={feedBackTypes}
                    userFeedback={userFeedback} // Placeholder, implement feedback logic
                    feedbackCount={feedbackCount} // Placeholder, implement feedback count logic
                    onFeedback={handleFeedback}
                    />
                )

            }
            {article.tags && article.tags.length > 0 && (
                <div className="ArticleTags">
                    <strong>Tags: </strong>
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
    );
};
export default NewsArticleLayout