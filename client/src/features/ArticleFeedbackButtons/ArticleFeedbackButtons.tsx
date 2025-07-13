/**
 * @file ArticleFeedbackButtons.tsx
 * @description Component for displaying feedback buttons for articles.
 * 
 * @feature ArticleFeedbackButtons
 * @params {Array<{ type: string; label: string }>} feedbackTypes - Types of feedback buttons to display.
 * @params {string | null} userFeedback - The current feedback type given by the user
 * @params {Object} feedbackCount - An object containing the count of feedback for each type.
 * @params {function} onFeedback - Callback function to handle feedback button clicks.
 * @returns {JSX.Element} A component that allows users to provide feedback on articles.
 */

// Import Packages
import React from 'react';

//Import Styles
import './ArticleFeedbackButtons.css';

type ArticlFeedbackButtonsProps = {
    feedbackTypes: Array<{ type: string; label: string }>;
    userFeedback: string | null;
    feedbackCount: { [key: string]: number };
    onFeedback: (type: string) => void;
};

const ArticleFeedbackButtons: React.FC<ArticlFeedbackButtonsProps> = ({
    feedbackTypes,
    userFeedback,
    feedbackCount,
    onFeedback
}) => {
    return (
        <div className="ArticleFeedbackButtons">
            {feedbackTypes.map(({ type, label }) => (
                <button
                    key={type}
                    className={`FeedbackButton ${userFeedback === type ? 'active' : ''}`}
                    onClick={() => onFeedback(type)}
                >
                    {label} ({feedbackCount[type] || 0})
                </button>
            ))}
        </div>
    );
};

export default ArticleFeedbackButtons