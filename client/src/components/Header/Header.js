/**
 * @file Header.js
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
import { Link } from "react-router-dom"

//Import Assets
import aeiplusoLogo from "../../assets/images/aeiplusoLogo.png"
import ensinoLusofonaBranco from "../../assets/images/ensino-lusofona-branco.svg"
import iplusoLogo from "../../assets/images/lusofona_vector.png"
import moodleLogo from "../../assets/images/moodle-logo.png"
import netpaLogo from "../../assets/images/netpa-logo.png"
import studentHubLogo from "../../assets/images/Studenthub.svg" 

// Importing Styles
import "./Header.css"

// List of external college links
const externalLinks = [
    {label: "IPLuso", url: "https://www.ipluso.pt/pt", icon: iplusoLogo},
    {label: "Moodle", url: "https://moodle.ensinolusofona.pt/", icon: moodleLogo},
    {label: "NetPA", url: "https://secretaria.virtual.ensinolusofona.pt/netpa/page", icon: netpaLogo},
    {label: "AEIPLuso", url: "https://aeipluso.pt/", icon: aeiplusoLogo}
];

export default function Headers() {
    return (
        <header>
            <img src = {ensinoLusofonaBranco} alt = "Ensino Lusófona"></img>
            <Link to="/" className="studentHubLogo" style={{ textDecoration: "none" }}>
                <img className = "studentHubLogo" src = {studentHubLogo} alt = "StudentHub Logo"></img>
                <p>Student Hub</p>
            </Link>
            <div className="Dropdown">
                <button className="Dropbtn">Ferramentas ▼</button>
                <div className="DropdownContent">
                    {externalLinks.map(link => (
                    <a 
                        key={link.url}
                        href={link.url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={link.icon} alt={link.label + "logo"}>
                        </img>
                        {link.label}
                    </a>
                    ))}
                </div>   
            </div>
        </header>
    );
}
