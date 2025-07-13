/**
 * @file useInteractedArticles.tsx
 * @description Custom hook to fetch interacted articles for a user.
 * 
 * @hooke useInteractedArticles
 * @param {string} apiURL - The base URL for the API.
 * @param {string} type - The type of articles to fetch ("news" or "events").
 * @param {string} userId - The ID of the user.
 * @returns {string[]} - An array of interacted article IDs.
 */

// Import Packages
import { useState, useEffect } from "react";

// Import Services
import { fetchInteracted } from "../services/api.tsx";

function useInteractedArticles(apiURL: string, type: "news" | "events", userId: string) {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        if (userId) {
            fetchInteracted(apiURL, type, userId)
                .then(res => res.json())
                .then(data => setItems(Array.isArray(data) ? data : []));
        }
    }, [apiURL, type, userId]);

    return items;
}

export default useInteractedArticles;

