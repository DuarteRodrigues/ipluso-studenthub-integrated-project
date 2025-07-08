/**
 * @file WelcomeMessage.tsx
 * @description welcome message component for the IPLuso StudentHub Integrated Project.
 * 
 * @component
 * @returns {JSX.Element} The rendered WelcomeMessage component.
 */

// Import Packages
import React from 'react';

// Import Styles
import './WelcomeMessage.css';

// Modularized Message
const WELCOME_MESSAGE = `
Esta é a plataforma digital que centraliza os serviços e informações mais relevantes da vida académica no Instituto Politécnico da Lusofonia.
Aqui podes consultar eventos, estágios, espaços académicos, contactos úteis e outras ferramentas que te ajudam a estar sempre ligado à tua instituição.
`;

const WelcomeMessage = () => (
    <div className="WelcomeMessage">
        <p>
          {WELCOME_MESSAGE.split('\n').map((line, idx) =>
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
            )}            
        </p>
    </div>
  );

export default WelcomeMessage;