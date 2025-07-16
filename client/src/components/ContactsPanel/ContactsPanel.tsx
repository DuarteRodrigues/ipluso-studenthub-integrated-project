/**
 * @file ContactsPanel.tsx
 * @description ContactsPanel component for displaying contact information in the IPLuso Student
 * 
 * @component ContactsPanel
 * @returns {JSX.Element} The ContactsPanel component.
 */

// Import Packages
import React from 'react';

// Import Styles
import './ContactsPanel.css';

// Import Assets
import IplusoLogoInverse from '../../assets/images/ipluso-logotipo-inverse.svg';

const ContactsPanel: React.FC = () => {
  return (
    <div className="ContactsPanel">
      <h2>Contactos</h2>
      <p>Para mais informações, por favor contacte-nos através dos seguintes meios:</p>
      <div className="ContactsPanelContent">
        <div>
          <ul>
            <li>Email: studenthub@ipluso.pt</li>
            <li>Telefone: +351 213 456 789</li>
            <li>Morada: Rua do Telhal aos Olivais n8 - 8a 1950-396 Lisboa</li>
          </ul>
        </div>
        <div>
          <img src={IplusoLogoInverse as string} alt="IPLuso Logo" />
        </div>
      </div>
    </div>
  );
};

export default ContactsPanel;