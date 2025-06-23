/**
 * @file App.js
 * @description Main application component for the IPLuso StudentHub Integrated Project.
 * Sets up the React Router for client-side navigation and renders the Navbar and page components.
 * Defines routes for Home, FAQ, Contacts, and Tests pages.
 */

import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import FAQPage from "./pages/FAQPage";
import ContactsPage from "./pages/Contacts"
import NotFoundPage from "./pages/NotFound";


function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<HomePage/>}/>
                <Route path = "/faq" element = {<FAQPage/>}/>
                <Route path = "/contacts" element = {<ContactsPage/>} />
                <Route path = "*" element ={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;