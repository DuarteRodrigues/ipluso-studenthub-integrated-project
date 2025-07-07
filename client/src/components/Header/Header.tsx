/**
 * @file Header.tsx
 * @description This file defines the Header component for the Student Hub application. The Header displays the main 
 * navigation bar, including the Ensino Lusófona logo, a link to the home page with the Student Hub logo and title, and 
 * a dropdown menu labeled "Ferramentas" that provides quick access to external college-related resources such as IPLuso,
 * Moodle, NetPA and AEIPLuso. The component imports necessary assets and styles, and utilizes React Router's Link for 
 * navigation.
 * 
 * @component
 * @returns {JSX.Element} The rendered header component.          
*/      

//Import Packages
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

// Import needed components
import LoginDropdown from "../../features/LoginDropdown/LoginDropdown.tsx";
import UserDropdown from "../../features/UserDropdown/UserDropdown.tsx";

// Import Custom Hooks
import useDropdown from "../../hooks/useDropdown.tsx";

// Import Utilities
import { setCookie, getCookie } from "../../utils/CookieManagement.tsx"

//Import Assets
import aeiplusoLogo from "../../assets/images/aeiplusoLogo.png"
import ensinoLusofonaBranco from "../../assets/images/ensino-lusofona-branco.svg"
import iplusoLogo from "../../assets/images/lusofona_vector.png"
import moodleLogo from "../../assets/images/moodle-logo.png"
import netpaLogo from "../../assets/images/netpa-logo.png"
import studentHubLogo from "../../assets/images/Studenthub.svg" 
import userIcon from "../../assets/images/user.png"

// Importing Styles
import "./Header.css"

type ExternalLink = {
    label: string;
    url: string;
    icon: string;
}

// List of external college links
const externalLinks: ExternalLink[] = [
    {label: "IPLuso", url: "https://www.ipluso.pt/pt", icon: iplusoLogo},
    {label: "Moodle", url: "https://moodle.ensinolusofona.pt/", icon: moodleLogo},
    {label: "NetPA", url: "https://secretaria.virtual.ensinolusofona.pt/netpa/page", icon: netpaLogo},
    {label: "AEIPLuso", url: "https://aeipluso.pt/", icon: aeiplusoLogo}
];

function Headers() {

    // Initialize state from cookie, default to PT
    const [isEnglish, setEnglish] = useState(() => getCookie("language") === "en" ? true : false);
    // Default: not logged in unless cookie says "true"
    const [isLoggedIn, setIsLoggedIn] = useState(() => getCookie("loggedIn") === "true");
    const [showLoginDropdown, toggleLoginDropdown, loginDropdownRef, closeLoginDropdown] = useDropdown<HTMLDivElement>();
    const [showUserDropdown, toggleUserDropdown, userDropdownRef, closeUserDropdown] = useDropdown<HTMLDivElement>();

    // When toggling language
    const handleLanguageToggle = () => {
        setEnglish( prev => {
            const newLang = !prev ? "en" : "pt";
            setCookie("language", newLang);
            return !prev;
        });
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setCookie("loggedIn", "true");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCookie("loggedIn", "false");
    }

    // Todo: Implement page redirect on successful login to user page only if login is successful on home page

    return (
        <header>
            <div className="HeaderLogo">
                <img src = {ensinoLusofonaBranco} alt = "Ensino Lusófona"></img>
            </div>
            <Link to="/" className="studentHubLogo" style={{ textDecoration: "none" }}>
                <img className = "studentHubLogo" src = {studentHubLogo} alt = "StudentHub Logo"></img>
                <p>Student Hub</p>
            </Link>
            <div className="HeaderActions">
                <button
                    className="LangSwitch"
                    onClick={handleLanguageToggle}
                    aria-label="Switch Language"
                >
                    {isEnglish ? "PT" : "EN"}
                </button>
                <div className="Dropdown">
                    <button className="Dropbtn">Ferramentas</button>
                    <div className="DropdownContent">
                        {externalLinks.map(link => (
                            <a
                                key={link.url}
                                href={link.url}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img src={link.icon} alt={link.label + "logo"} />
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                {!isLoggedIn ? (
                    <div className="LoginDropdown" ref={loginDropdownRef}>
                        <button className="LoginBtn" onClick={toggleLoginDropdown}>
                            Login
                        </button>
                        <LoginDropdown
                            show={showLoginDropdown}
                            onClose={closeLoginDropdown}
                            onLogin={handleLogin}
                        />
                    </div>
                ): (
                    <div className="UserDropdown" ref={userDropdownRef}>
                        <img src={userIcon} alt="User Icon" className="UserIcon" onClick = {toggleUserDropdown} tabIndex={0} role="button"/>
                        <UserDropdown
                            show={showUserDropdown}
                            onClose={closeUserDropdown}
                            onLogout={handleLogout}
                        />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Headers;
