/**
 * @file Events.js
 * @description This file contains the Events page component, which displays a list of events
 *
 * @Page
 * @returns {JSX.Element} The rendered Events page component.
 */

// Import Packages
import React from "react";

// Importing Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function EventsPage() {
  return (
    <div>
      <Header />
      <h1>Eventos</h1>
      <p>
        Esta página contém uma lista de eventos relacionados ao projeto IPLuso
        StudentHub. Aqui você pode encontrar informações sobre eventos passados
        e futuros, como datas, locais e descrições.
      </p>
      <Footer />
    </div>
  );
}
