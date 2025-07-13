/**
 * @file InternshipsPanel.tsx
 * @description Component to display a panel of internship opportunities.
 * 
 * @component InternshipsPanel
 * @returns {JSX.Element} A component that renders the internships panel.
 */

// Import Packages
import React from 'react'

// Import Components
import InternshipsCard from '../InternshipsCard/InternshipsCard.tsx';

// Import Styles
import './InternshipsPanel.css';

const InternshipsPanel: React.FC = ({ 
    internships = [], 
    internshipsLoading = false,
     internshipsError = null 
    }) => {
    if (internshipsLoading) {
        return <div>Loading internships...</div>;
    }
    if (internshipsError) {
        return <div>Erro ao carregar</div>
    }

    if (!internships || internships.length === 0) return <div>Sem estágios disponíveis.</div>;

  return (
    <>
        <div className="InternshipsPanelHeader">
            <h2>Estágios</h2>
            <div className="InternshipsPanelSubtitle">
                Estes são alguns dos nossos estágios mais recentes!
            </div>
        </div>
        <div className="InternshipsPanel">
            {internshipsLoading ? <div>Loading internships...</div> : null}
            {internshipsError ? <div>Error loading internships.</div> : null}
            <div className="InternshipsCarousel">
                {internships.map((internship) => (
                <InternshipsCard key={internship._id} article={internship} />
            ))}
            </div>
        </div>
    </>

  );
};

export default InternshipsPanel