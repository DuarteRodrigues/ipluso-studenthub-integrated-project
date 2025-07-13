/**
 * @file NewsLayout.tsx
 * @description Layout component for displaying news articles.
 * 
 * @layout NewsLayout
 * @returns {JSX.Element} A layout displaying the news articles with a header and footer.
 */

// Import Packages
import React from 'react';

// Import Components
import ArticlesLayout from './ArticlesLayout.tsx';

const TAGS = ["EET", "ECIA", "ESCAD", "ESEL", "ESPA", "ERISA"];

const NewsLayout: React.FC = () => {

    return (
        <>
            <ArticlesLayout
                apiPath="news"
                tags={TAGS}
                pageTitle="Notícias"
                pageSubtitle="Esta é a página de notícias"
                cardType="news"
            />
        </>
    );
};

export default NewsLayout