/**
 * @file CookieConsent.tsx
 * @description Component for displaying a cookie consent banner. 
 * 
 * @component CookieConsent
 * @returns {JSX.Element} A banner prompting users to accept or decline cookies.
 */

// Import Packages
import React, { useState, useEffect } from "react";

// Import Styles
import "./CookieConsent.css";

const COOKIE_NAME = "cookieConsent";

const CookieConsent: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_NAME);
        if (!consent) setShow(true);
    }, []);

    const handleConsent = (accepted: boolean) => {
        localStorage.setItem(COOKIE_NAME, accepted ? "accepted" : "declined");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="CookieConsent">
            <span>Este site utiliza cookies para melhorar a sua experiência. Ao continuar, aceita a nossa política de cookies.<br></br></span>
            <div className="CookieConsentButtons">
                <button onClick={() => handleConsent(true)}>Aceito</button>
                <button onClick={() => handleConsent(false)}>Recuso</button>
            </div>   
        </div>
    );
}

export default CookieConsent;