/**
 * @file Contacts.tsx
 * @description Page component for displaying contact information and a contact form.
 * 
 * @page Contacts
 * @returns {JSX.Element} A page displaying contact information and a contact form.
 */

// Import Packages
import React from "react";

//Import Components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function ContactsPage() {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <p>Contact information and form will go here.</p>
      <Footer />
    </div>
  );
}

export default ContactsPage;
