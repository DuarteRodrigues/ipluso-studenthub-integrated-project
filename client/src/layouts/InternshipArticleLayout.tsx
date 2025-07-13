/**
 * @file InternshipArticleLayout.tsx
 * @description Layout component for displaying a single internship article in detail.
 * 
 * @layout InternshipArticleLayout
 * @returns {JSX.Element} The rendered layout for the internship article.
 */

// Import Packages
import React from 'react';

// Import Components
import ArticleFeedbackButtons from '../features/ArticleFeedbackButtons/ArticleFeedbackButtons.tsx';

//Import Hooks
import { useArticleFeedback } from '../hooks/useArticleFeedback.tsx';

// Import Context
import { useUser } from '../store/UserContext.tsx';

// Import Styles
import '../styles/InternshipArticleLayout.css';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

// Define InternshipArticleLayout types
type InternshipArticleLayoutProps = {
    article: {
        id: number;
        title: string;
        description: string;
        context: string;
        entity: string;
        coordinatingProfessor: {
            name: string;
            email: string;
        }
        hours: number;
        year: number;
        oportunityYear: number;
        requiredECTS: number;
        location: string;
        tags: any[]
    }
};

const feedBackTypes = [
    { type: "like", label: "👍 Gosto/Interessa-me" },
    { type: "wow", label: "😮 Wow!" },
]

const InternshipArticleLayout: React.FC<InternshipArticleLayoutProps> = ({ article }) => {

    const { user } = useUser();

    // Use the custom hook, passing user?.userId (may be undefined if not logged in)
    const { userFeedback, feedbackCount, handleFeedback } = useArticleFeedback(
        apiURL,
        String(article._id),
        user?.userId ?? "",
        "internships/article"
    );

  return (
    <div className = "InternshipArticlePage">
        <h1 className="InternshipArticleTitle">{article.title}</h1>
        <div className="InternshipArticleContext">{article.context}</div>

        <div className="InternshipArticleDetails">
            <p><strong>Entidade:</strong> {article.entity}</p>
            <p><strong>Professor Coordenador:</strong> {article.coordinatingProfessor.name} ({article.coordinatingProfessor.email})</p>
            <p><strong>Duração:</strong> {article.hours} horas</p>
            <p><strong>Ano:</strong> {article.year}º Ano</p>
            <p><strong>Ano da Oportunidade:</strong> {article.oportunityYear}º Ano</p>
            <p><strong>ECTS Requeridos:</strong> {article.requiredECTS} ECTS</p>
        </div>

        <div className="InternshipArticleLocation">
            <iframe
                title="Localização no Google Maps"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                style = {{ borderRadius: '1rem', overflow: 'hidden', border: 'none', pointerEvents: 'none' }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`${article.location}`}
            ></iframe>
        </div>

        {user?.username?.startsWith("a") && (
                <ArticleFeedbackButtons
                    feedbackTypes={feedBackTypes}
                    userFeedback={userFeedback}
                    feedbackCount={feedbackCount}
                    onFeedback={handleFeedback}
                />
            )}
            
            {article.tags && article.tags.length > 0 && (
              <div className="ArticleTags">
                <strong>Tags:</strong>{" "}
                <div className="ArticleTagsList">
                  {article.tags.map((tag) => (
                  <span key={tag} className="ArticleTag">
                    {typeof tag === "number" ? `${tag}º Ano` : tag}
                  </span>
                  ))}
                </div>
              </div>
            )}

            <div className="ArticleMeta">
                <span className="ArticleDate">{article.date}</span>
            </div>
    </div>
  )
}

export default InternshipArticleLayout;