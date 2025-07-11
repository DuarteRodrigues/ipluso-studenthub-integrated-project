/**
 * @file SpacePanel.tsx
 * @description Component for displaying a panel of spaces in the application.
 * 
 * @component SpacePanel
 * @returns {JSX.Element} A panel component that renders a list of spaces.
 */

// Import Packages
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Styles
import './SpacePanel.css';

// Import Assets
import campusCG from '../../assets/images/Campus-Campo-Grande.jpg';
import campusBP from '../../assets/images/Campus-Braco-Prata.jpg';

const spaces = [
    {
        name: "Campus do Campo Grande",
        image: campusCG,
        bulletpoints: [
            "Localização Central em Lisboa",
            "Laboratórios de Informática e Tecnologia",
            "Serviços Académicos e Administrativos",
            "Infraestrutura de Hotelaria e Turismo"
        ],
        link: "/spaces/#campus-campo-grande"
    },
    {
        name: "Campus de Braço de Prata",
        image: campusBP,
        bulletpoints: [
            "Laboratórios de Saúde e Enfermagem",
            "Biblioteca e Centro de Recursos",
            "Serviços Académicos e Administrativos",
            "Tuna e Gabinete de Associação de Estudantes"
        ],
        link: "/spaces/#campus-braco-de-prata"
    },
];

const SpacePanel:React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className = "SpacePanel">
        <h2 className="SpacePanelTitle">Espaços</h2>
        {spaces.map((space) => (
            <div 
                key = {space.name} 
                className="SpaceCard"
                onClick={() => navigate(space.link)}
                tabIndex= {0}
                role="button"
            >
                <div className="SpaceImageWrapper">
                    <img src = {space.image} alt = {space.name} className="SpaceImage"/>
                    <div className = "SpaceOverlay">
                        <h3>{space.name}</h3>
                        <ul>
                            {space.bulletpoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}

    </div>
  );
};

export default SpacePanel