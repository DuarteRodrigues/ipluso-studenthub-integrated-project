/**
 * @file ProfileAdminLayout.tsx
 * @description Layout component for the admin profile page.
 * 
 * @layout ProfileAdminLayout
 * @returns {JSX.Element} A layout component that renders the admin profile content.
 */

// Import Packages
import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Import Contexts
import { useUser } from '../store/UserContext.tsx';

// Import Components
import NewsForm from '../components/NewsForm/NewsForm.tsx';
import EventsForm from '../components/EventsForm/EventsForm.tsx';
import InternshipsForm from '../components/InternshipsForm/InternshipsForm.tsx';

// Import Assets
import userIcon from '../assets/images/user.png';

// Import Services
import { fetchArticles, deleteArticle } from "../services/api.tsx";

// Import Styles
import '../styles/ProfileAdminLayout.css';

// Import Utilities
import {sortMostRecent} from "../utils/articleManipulation.tsx";

const apiURL = process.env.REACT_APP_API_URL;

const fetchNews = await fetchArticles(apiURL, "news");
const fetchEvents = await fetchArticles(apiURL, "events");
const fetchInternships = await fetchArticles(apiURL, "internships");


const ProfileAdminLayout: React.FC<{ userData: any }> = ({ userData }) => {

  const first_name = userData.first_name;

  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<'news' | 'events' | 'internships'> ('news');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'news' | 'events' | 'internships' | null>(null);
  const [editArticle, setEditArticle] = useState<any>(null);
  const [localNews, setLocalNews] = useState<[]>([]);
  const [localEvents, setLocalEvents] = useState<[]>([]);
  const [localInternships, setLocalInternships] = useState<[]>([]);
  const organicUnit = userData.organic_unit;

  const queryClient = useQueryClient();

  const { data: news = [], isLoading: newsLoading, error: newsError } = useQuery({
    queryKey: ['news'],
    queryFn: () => fetchNews,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  useEffect(() => {
    setLocalNews(news);
  }, [news]);

  useEffect(() => {
    console.log('Local news updated:', localNews);
  }, [localNews]);

  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  useEffect(() => {
    setLocalEvents(events);
  }, [events]);

  useEffect(() => {
    console.log('Local events updated:', localEvents);
  }, [localEvents]);

  const { data: internships = [], isLoading: internshipsLoading, error: internshipsError } = useQuery({
    queryKey: ['internships'],
    queryFn: () => fetchInternships,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });

  useEffect(() => {
    setLocalInternships(internships);
  }, [internships]);

  useEffect(() => {
    console.log('Local internships updated:', localInternships);
  }, [localInternships]);

  const sortedNews = sortMostRecent(news);
  const sortedEvents = sortMostRecent(events);
  const sortedInternships = sortMostRecent(internships);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditArticle(null);
    setModalType(null);
  }

  return (
    <>
      <div className="ProfileAdminContainer">
        <aside className="ProfileAdminSidebar">
          <div className="ProfileAdminAvatar">
            <img src={userIcon} alt="Admin" />
            <h2>Olá, {first_name}!</h2>
          </div>
          <div className="ProfileAdminInfo">
            <p><strong>Unidade Orgânica:</strong> {organicUnit}</p>
            <p><strong>Cargo:</strong> Administrador</p>
          </div>
        </aside>
        <main className="ProfileAdminMain">
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
            <button 
              className = {activeTab === 'internships' ? 'active' : ''}
              onClick={() => setActiveTab('internships')}
            > 
              Estágios
            </button>
          </div>
          <div className="ProfileAdminContent">
            { activeTab === 'news' ? (
                <div>
                  <div className="ProfileAdminContentHeader">
                    <p>Estas são as notícias presentes no website</p>
                    <button onClick={() => { setEditArticle(null); setModalOpen(true); setModalType('news'); }}>+</button>
                  </div>
                  {newsLoading ? (
                  <p>A carregar notícias...</p>
                  ) : newsError ? (
                  <p>Erro ao carregar notícias.</p>
                  ) : sortedNews.length > 0 ? (
                  <ul>
                    {sortMostRecent(localNews).map((article, index) => (
                      <li key={article._id || index}>
                        <div className="ProfileAdminArticle">
                          <p>{article.title}</p>
                          <p className="ArticleDate">{article.date}</p>
                        </div>
                        <div className="ProfileAdminArticleActions">
                            <button
                              onClick={() => {
                              console.log('Editing article:', article);
                              setEditArticle(article);
                              setModalOpen(true);
                              setModalType('news');
                              }}
                            >✏️</button>
                            <button
                              onClick = { async () => {
                                await deleteArticle(apiURL, "news", article._id);
                                setLocalNews(prev => prev.filter(a => a._id !== article._id));
                              }}
                            >❌</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhuma notícia disponível.</p>
                )}
                </div>
            ) : activeTab === 'events' ? (
                <div>
                  <div className="ProfileAdminContentHeader">
                    <p>Estes são os eventos presentes no website</p>
                    <button onClick={() => { setEditArticle(null); setModalOpen(true); setModalType('events'); }}>+</button>
                  </div>
                  {eventsLoading ? (
                  <p>A carregar eventos...</p>
                  ) : eventsError ? (
                  <p>Erro ao carregar eventos.</p>
                  ) : sortedEvents.length > 0 ? (
                  <ul>
                    {sortMostRecent(localEvents).map((article, index) => (
                      <li key={article._id || index}>
                        <div className="ProfileAdminArticle">
                          <p>{article.title}</p>
                          <p className="ArticleDate">{article.date}</p>
                        </div>
                        <div className="ProfileAdminArticleActions">
                          <button
                            onClick={() => {
                              setEditArticle(article);
                              setModalOpen(true);
                              setModalType('events');
                            }}
                          >✏️</button>
                          <button
                            onClick = { async () => {
                                await deleteArticle(apiURL, "events", article._id);
                                setLocalEvents(prev => prev.filter(a => a._id !== article._id));
                              }}
                          >❌</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhuma notícia disponível.</p>
                )}
                </div>
            ) : activeTab === 'internships' ? (
                <div>
                  <div className="ProfileAdminContentHeader">
                    <p>Estes são os estágios presentes no website</p>
                    <button onClick={() => { setEditArticle(null); setModalOpen(true); setModalType('internships'); }}>+</button>
                  </div>
                  {internshipsLoading ? (
                  <p>A carregar estágios...</p>
                  ) : internshipsError ? (
                  <p>Erro ao carregar estágios.</p>
                  ) : sortedInternships.length > 0 ? (
                  <ul>
                    {sortMostRecent(localInternships).map((article, index) => (
                      <li key={article._id || index}>
                        <div className="ProfileAdminArticle">
                          <p>{article.title}</p>
                          <p className="ArticleDate">{article.oportunityYear}</p>
                        </div>
                        <div className="ProfileAdminArticleActions">
                          <button
                            onClick={() => {
                              setEditArticle(article);
                              setModalOpen(true);
                              setModalType('internships');
                            }}
                          >✏️</button>
                          <button
                            onClick = { async () => {
                                await deleteArticle(apiURL, "internships", article._id);
                                setLocalInternships(prev => prev.filter(a => a._id !== article._id));
                              }}
                          >❌</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhuma notícia disponível.</p>
                )}
                </div>
            ) : null }
          </div>
        </main>
      </div>
      {modalOpen && (
        <div className = "ProfileAdminModalOverlay" onClick={() => setModalOpen(false)}>
          <div className="ProfileAdminModal" onClick={e => e.stopPropagation()}>
            {modalType === 'news' && <NewsForm onClose={handleCloseModal} article={editArticle} setLocalNews={setLocalNews}/>}
            {modalType === 'events' && <EventsForm onClose={handleCloseModal} article={editArticle} setLocalEvents={setLocalEvents}/>}
            {modalType === 'internships' && <InternshipsForm onClose={handleCloseModal} article={editArticle} setLocalInternships={setLocalInternships}/>}
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileAdminLayout