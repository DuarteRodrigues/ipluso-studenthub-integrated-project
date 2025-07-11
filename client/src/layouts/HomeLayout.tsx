/**
 * @file HomeLayout.tsx
 * @description Layout component for the home page of the application.
 * 
 * @layout HomeLayout
 * @returns {JSX.Element} A layout component that renders the home page content.
 */

// Import Packages
import React from 'react';

// Import Components
import TitleCard from '../components/TitleCard/TitleCard.tsx';
import Navbar from '../components/Navbar/Navbar.tsx';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage.tsx';
import NewsEventsPanel from '../components/NewsEventsPanel/NewsEventsPanel.tsx';

const HomeLayout = () => {
  return (
    <>      
        <TitleCard />
        <Navbar />
        <WelcomeMessage />
        <NewsEventsPanel />
    </>
  );
};

export default HomeLayout