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
export async function fetchArticles(apiURL: string, type: "news" | "events" | "internships") {
    const res = await fetch(`${apiURL}/${type}`);
    if (!res.ok) throw new Error("Failed to fetch articles");
    return res.json();
}

export async function fetchArticle(apiURL: string, type: "news" | "events" | "internships", id: string) {
    const res = await fetch(`${apiURL}/${type}/article/${id}`);
    if (!res.ok) throw new Error("Failed to fetch article");
    return res.json();
}

export async function fetchInteracted(apiURL: string, type: "news" | "events" | "interships", userId: string) {
    const res = await fetch(`${apiURL}/${type}/interacted/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch interacted articles");
    return res.json();
}

export async function fetchTags(apiURL: string, type: "news" | "events" | "internships") {
    const res = await fetch(`${apiURL}/${type}/tags`);
    if (!res.ok) throw new Error("Failed to fetch tags");
    return res.json();
} 

export async function submitForm(apiURL, type, data, articleId?) {
    if (articleId) {
        // Update existing article
        let url = `${apiURL}/${type}`;
        let method = "PATCH";
        console.log(`Updating article at URL: ${url}/article/${articleId}`);
        const res = await fetch(`${url}/article/${articleId}`, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to update article");
        return res.json();
        
    } else {
        // Create new article
        let url = `${apiURL}/${type}`;
        let method = "POST";
        console.log(`Creating article at URL: ${url}`);
        const res = await fetch(`${url}`, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to create article");
        return res.json();
    }
}

export async function deleteArticle(apiURL: string, type: "news" | "events" | "internships", articleId: string) {
    const url = `${apiURL}/${type}/article/${articleId}`;
    console.log("Deleting article at URL:", url);
    const res = await fetch(url, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("Failed to delete article");
    return res.json();
}