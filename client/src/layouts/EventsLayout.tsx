/**
 * @file EventsLayout.tsx
 * @description Layout component for the Events page in the IPLuso StudentHub Integrated Project.
 * 
 * @layout EventsLayout
 * @returns {JSX.Element} A layout component that wraps the Events page content.
 */

// Import Packages
import React from 'react';

// Import Components
import ArticlesLayout from './ArticlesLayout.tsx';

const TAGS = ["EET", "ECIA", "ESCAD", "ESEL", "ESPA", "ERISA"];

const EventsLayout: React.FC = ({ events, eventsLoading, eventsError }) => {
  return (
    <>
      <ArticlesLayout
        articles={events}
        articlesLoading={eventsLoading}
        articlesError={eventsError}
        tags={TAGS}
        pageTitle="Eventos"
        pageSubtitle="Esta é a página de eventos"
        cardType="events"
      />
    </>
  )
}

export default EventsLayout