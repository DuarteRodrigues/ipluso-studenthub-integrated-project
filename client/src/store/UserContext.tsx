/**
 * @file UserContext.tsx
 * @description Context for managing user state in the application.
 * Provides a way to set and get the current user's name.
 * 
 * @context UserContext
 * @returns {JSX.Element} A context provider that wraps the application and provides user state
 */

// Import Packages
import React, { createContext, useContext, useState } from "react";

type UserType = {
    userId: string;
    username: string;
}

type UserContextType = {
    user: string;
    setUser: (user: UserType | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUserState] = useState<UserType | null>(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });

    // Persist user to localStorage
    const setUser = (user: UserType | null) => {
        setUserState(user);
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return ctx;
}