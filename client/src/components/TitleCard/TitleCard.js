/**
 * @file TitleCard.js
 * @description TitleCard component for the IPLuso StudentHub Integrated Project.
 *
 * @component
 * @returns {JSX.Element} The TitleCard component displaying the project title and image.
 */

// Import Packages
import React from "react";

// Import Assets
import PalacioVimioso from "../../assets/images/Palácio_do_Conde_de_Vimioso.jpg";

// Import Styles
import "./TitleCard.css";

export default function TitleCard() {
  return (
    <div className="wrapper">
      <img src={PalacioVimioso} alt="Vimioso"></img>
      <div className="title">
        <h1>Bem-vind@ ao StudentHub do IPLuso</h1>
        <p>
          Onde poderás encontrar todas as informações para a tua vida académica!
        </p>
      </div>
    </div>
  );
}
