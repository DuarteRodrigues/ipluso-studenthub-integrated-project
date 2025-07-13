/**
 * @file InternshipsLayout.tsx
 * @description Layout component for the Internships section of the application.
 * 
 * @layout InternshipsLayout
 * @returns {JSX.Element} A layout component that can be used to wrap Internships-related pages.
 */

// Import Packages
import React from 'react'

// Import Components
import ArticlesLayout from './ArticlesLayout.tsx';

const TAGS = ["EET", "ECIA", "ESCAD", "ESEL", "ESPA", "ERISA"];

const InternshipsLayout: React.FC = ({ internships, internshipsLoading, internshipsError}) => {

  return (
    <>
      <ArticlesLayout
        articles={internships}
        articlesLoading={internshipsLoading}
        articlesError={internshipsError}
        tags={TAGS}
        pageTitle="Estágios"
        pageSubtitle="Esta é a página de estágios"
        cardType="internships"
      />
    </>
  )
}

export default InternshipsLayout