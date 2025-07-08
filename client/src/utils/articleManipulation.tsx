/**
 * @file sortMostRecent.tsx
 * @description Utility function to sort an array of objects (news, events, internships, etc.)
 * by their publishing date (ISO string or Date object) in descending order(most recent first).
 * 
 * @param {Array} items - Array of objects with a 'date' property (ISO string, Date, or timestamp) to be sorted.
 * @returns {Array} - A new sorted array of objects(most recent first).
 */


// Function to sort an array of objects by their date property in descending order
export function sortMostRecent<T extends { date: string | Date | number }> (items: T[]): T [] {
    return [...items].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Sort in descending order (most recent first)
    });
}

// Function to sort an array of objects by their date property in ascending order
export function sortLeastRecent<T extends { date: string | Date | number }> (items: T[]): T[] {
    return [...items].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB; // Sort in ascending order (least recent first)
    });
}

