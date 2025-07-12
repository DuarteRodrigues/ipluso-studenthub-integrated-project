/** 
 * @file ProfileUserLayout.tsx
 * @description Layout component for the user profile page.
 * 
 * @layout ProfileUserLayout
 * @returns {JSX.Element} A layout component that renders the user profile content.
 */

// Import Packages
import React, { useState, useEffect } from 'react'

// Import Components
import ProfileInteractedList from '../components/ProfileInteractedList/ProfileInteractedList.tsx';

// Import Contexts
import { useUser } from '../store/UserContext.tsx'

// Import Styles
import '../styles/ProfileUserLayout.css';

// Import Assets
import userIcon from '../assets/images/user.png';

const apiURL = process.env.REACT_APP_API_URL;

const ProfileUserLayout: React.FC<{ userData: any }> = ({ userData }) => {

    // Dummy data for demonstration
    const first_name = userData.first_name || "Estudante";
    const course = userData.course || "Licenciatura em Engenharia Informática e Aplicações";
    const year = userData.year || 2;
    const organicUnit = userData.organic_unit || "EET";

    const { user } = useUser();
    const [activeTab, setActiveTab] = useState<'news' | 'events'> ('news');
    const [interactedNews, setInteractedNews] = useState<any[]>([]);

    useEffect(() => {
        if (user && user.userId) {
            fetch(`${apiURL}/news/interacted/${user.userId}`)
                .then(res => res.json())
                .then(data => setInteractedNews(Array.isArray(data) ? data : []));
        }
    }, [user]);

  return (
    <>
        <div className = "ProfileUserContainer">
            <aside className="ProfileUserSidebar">
                <div className="ProfileUserAvatar">
                    <img src={userIcon} alt="User" />
                </div>
                <div className="ProfileUserInfo">
                    <h2>Olá, {first_name}!</h2>
                    <p><strong>Curso:</strong> {course}</p>
                    <p><strong>Ano:</strong> {year}</p>
                    <p><strong>Unidade Orgânica:</strong> {organicUnit}</p>
                </div>
            </aside>
            <main className = "ProfileUserMain">
                <div className = "ProfileUserTabs">
                    <button 
                        className = {activeTab === 'news' ? 'active' : ''}
                        onClick={() => setActiveTab('news')}
                    > 
                        Notícias
                    </button>
                    <button 
                        className = {activeTab === 'events' ? 'active' : ''}
                        onClick={() => setActiveTab('events')}
                    > 
                        Eventos
                    </button>
                </div>
                <div className = "ProfileUSerTabContent">
                    {activeTab === 'news' ? (
                        <div>
                            <p>Estas são as notícias com que interagiste!</p>
                            <ProfileInteractedList items={interactedNews} emptyMessage="Não interagiste com nenhuma notícia (ainda...)"/>

                        </div>
                    ) : (
                        <div>
                            {/* TODO: Render list of events of interest */}
                            <p>Lista de eventos marcados como interessante.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    </>
  )
}

export default ProfileUserLayout