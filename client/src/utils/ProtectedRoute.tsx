/**
 * @file ProtectedRoute.tsx
 * @description This file defines the ProtectedRoute component for the Student Hub application. The ProtectedRoute component
 * is a higher-order component that wraps around other components to ensure that they are only accessible to authenticated users.
 * It checks if the user is logged in by verifying the presence of a valid authentication token in the cookies.
 * 
 * @utility ProtectedRoute
 * @param {JSX.Element} children - The child components to be rendered if the user is authenticated.
 * @return {JSX.Element} The rendered child components if authenticated, or redirects to the login page if not.  
 */

import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "./CookieManagement.tsx";

const ProtectedRoute = ({ children}: { children: JSX.Element}) => {
    // Check if the user is authenticated by checking the presence of a valid token in cookies
    const isAuthenticated = getCookie("loggedIn") === "true";

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;