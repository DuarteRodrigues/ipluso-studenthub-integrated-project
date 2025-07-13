/** 
 * @file useArticleFeedback.tsx
 * @description Custom hook for managing article feedback in the application.
 * This hook provides functionality to fetch, post, and manage user feedback on articles.
 * 
 * @hook useArticleFeedback
 * @param {string} apiURL - The base URL for the API.
 * @param {string} articleId - The ID of the article for which feedback is being managed.
 * @param {string} userId - The ID of the user providing feedback.
 * @param {string} endpoint - The endpoint to fetch feedback from (e.g., "news/article" or "events/article").
 * @returns {{ userFeedback, feedbackCount, handleFeedback }} - An object containing the user's feedback, feedback count, and a function to handle feedback.
 */

// Import Packages
import { useState, useEffect } from "react";

export function useArticleFeedback(apiURL: string, articleId: string, userId: string, endpoint: string) {
    const [userFeedback, setUserFeedback] = useState<string | null>(null);
    const [feedbackCount, setFeedbackCount] = useState<{ [key: string]: number }>({});

    const handleFeedback = (type: string) => {
        let newFeedback: string | null = null;
        let newCounts = { ...feedbackCount };

        if (userFeedback === type) {
            newCounts[type] = (newCounts[type] || 1) - 1;
            newFeedback = null;
        } else {
            if (userFeedback) newCounts[userFeedback] = (newCounts[userFeedback] || 1) - 1;
            newCounts[type] = (newCounts[type] || 0) + 1;
            newFeedback = type;
        }

        setFeedbackCount(newCounts);
        setUserFeedback(newFeedback);

        fetch(`${apiURL}/${endpoint}/${articleId}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, type: newFeedback }),
        });
    };

    useEffect(() => {
        fetch(`${apiURL}/${endpoint}/${articleId}/feedback?userId=${userId}`)
            .then(res => res.json())
            .then(data => {
                setFeedbackCount(data.feedbackCount || {}); // Fallback to empty object if no feedback count
                setUserFeedback(data.userFeedback);
            });
    }, [apiURL, endpoint, articleId, userId]);

    return { userFeedback, feedbackCount, handleFeedback };
}
