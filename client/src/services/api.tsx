/**
 * @file api.tsx
 * @description API service for fetching articles and interacted articles.
 * 
 * @service fetchArticle, fetchInteracted
 * @param {string} apiURL - The base URL for the API.
 * @param {string} type - The type of article ('news' or 'events').
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any>} - A promise that resolves to the article data or interacted articles.
 */

// Used in client/src/hooks/useArticleFeedback.tsx
export async function fetchArticles(apiURL: string, type: "news" | "events") {
    const res = await fetch(`${apiURL}/${type}`);
    if (!res.ok) throw new Error("Failed to fetch articles");
    return res.json();
}

export async function fetchArticle (apiURL: string, type: "news" | "events", id: string) {
    const res = await fetch(`${apiURL}/${type}/article/${id}`);
    if (!res.ok) throw new Error("Failed to fetch article");
    return res.json();
}

export async function fetchInteracted(apiURL: string, type: "news" | "events", userId: string) {
    const res = await fetch(`${apiURL}/${type}/interacted/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch interacted articles");
    return res.json();
}