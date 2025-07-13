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
import SpacePanel from '../components/SpacePanel/SpacePanel.tsx';

// Todo: Add a Carousel with cards for the internship oportunities
// Todo: Add a section for the contacts

const HomeLayout = ({news, newsLoading, newsError, events, eventsLoading, eventsError}) => {
  return (
    <>      
        <TitleCard />
        <Navbar />
        <WelcomeMessage />
        <NewsEventsPanel
          news={news} 
          newsLoading={newsLoading}
          newsError={newsError}
          events={events}
          eventsLoading={eventsLoading}
          eventsError={eventsError}
        />
        <SpacePanel />
    </>
  );
};

export default HomeLayout