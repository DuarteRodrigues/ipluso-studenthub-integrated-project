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
import InternshipsPanel from '../components/InternshipsPanel/InternshipsPanel.tsx';
import SpacePanel from '../components/SpacePanel/SpacePanel.tsx';
import ContactsPanel from '../components/ContactsPanel/ContactsPanel.tsx';

const HomeLayout = ({news, newsLoading, newsError, events, eventsLoading, eventsError, internships, internshipsLoading, internshipsError}) => {
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
        <InternshipsPanel
          internships={internships}
          internshipsLoading={internshipsLoading}
          internshipsError={internshipsError}
        />
        <SpacePanel />
        <ContactsPanel />
    </>
  );
};

export default HomeLayout