/**
 * @file NotFound.tsx
 * @description Page component for displaying a 404 Not Found error.
 * 
 * @page NotFound
 * @returns {JSX.Element} A page displaying a 404 error message and a link
 */

import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
