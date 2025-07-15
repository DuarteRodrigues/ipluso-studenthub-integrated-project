/**
 * @file InternshipsForm.tsx
 * @description Component for rendering the internships form.
 * 
 * @component InternshipsForm
 * @returns {JSX.Element} . 
 */

// Import Packages
import React, { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// Import Styles
import '../../styles/ProfileAdminLayout.css';
import './InternshipsForm.css';

// Import Services
import { fetchTags, submitForm } from '../../services/api.tsx';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const existingTags = await fetchTags(apiURL, "internships");

console.log("Existing Tags:", existingTags); 

const InternshipsForm = ({ onClose, article, setLocalInternships }) => {

  console.log("InternshipsForm Mounted");

  const [tagInput, setTagInput] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [existingTags, setExistingTags] = useState<string[]>([]);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [title, setTitle] = useState(article?.title || '');
  const [description, setDescription] = useState(article?.description || '');
  const [entity, setEntity] = useState(article?.entity || '');
  const [coordinator, setCoordinator] = useState({
    name: article?.coordinatingProfessor?.name || '',
    email: article?.coordinatingProfessor?.email || ''
  });
  const [context, setContext] = useState(article?.context || '');
  const [hours, setHours] = useState(article?.hours || '');
  const [year, setYear] = useState(article?.year || '');
  const [requiredECTS, setRequiredECTS] = useState(article?.requiredECTS || '');
  const [location, setLocation] = useState(article?.location || '');

  const queryClient = useQueryClient();

  const today = new Date();
  const currentYear = today.getFullYear();

  useEffect(() => {
    if (article) {
        setTitle(article.title || '');
        setDescription(article.description || '');
        setEntity(article.entity || '');
        setCoordinator({
            name: article.coordinatingProfessor?.name || '',
            email: article.coordinatingProfessor?.email || ''
        });
        setHours(article.hours || '');
        setYear(article.year || '');
        setRequiredECTS(article.requiredECTS || '');
        setLocation(article.location || '');
        setContext(article.context || '');
        if (article.thumbnail && typeof article.thumbnail === 'string' && article.thumbnail.startsWith('http')) {
        setThumbnailPreview(article.thumbnail);
        } else {
        setThumbnailPreview(null);
        }
        setSelectedTags(article.tags || []); 
    }
    }, [article]);

  useEffect(() => {
    fetchTags(apiURL, "internships").then(res => {
      if (Array.isArray(res)) {
        setExistingTags(res);
      } else if (res && Array.isArray(res.tags)) {
        setExistingTags(res.tags);
      } else if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0].tags)) {
        setExistingTags(res[0].tags);
      } else {
        setExistingTags([]);
      }
    });
  }, []);

  const handleAddTag = (tag: string) => {
    if (tag && !selectedTags.includes(tag)) {
        setSelectedTags([...selectedTags, tag]);
    }
    setTagInput('');
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    const payload = {
      title,
      description,
      entity,
      coordinatingProfessor: coordinator,
      oportunityYear: currentYear,
      context,
      hours,
      year,
      requiredECTS,
      location,
      tags: selectedTags,
      feedback: article?.feedback || [],
    };

    if (!article?._id){
      payload.oportunityYear = currentYear;
    }

    try {
      console.log("Submitting form:", { title, description, entity, coordinator, context, hours, year, requiredECTS, location, tags: selectedTags });

      let newArticle;
      if (article && article._id) {
        newArticle = await submitForm(apiURL, "internships", payload, article._id);
        console.log("Article submitted successfully:", newArticle);
        console.log("Article Content:", newArticle.article);
        // Update the edited article in localInternships
        if (newArticle && newArticle.article) {
          setLocalInternships(prev => {
            console.log("Updating local internships with new article:", newArticle.article);
            // Remove the old article
            const filtered = prev.filter(a => String(a._id) !== String(article._id));
            console.log("Filtered local internships:", filtered);
            // Preserve the original date
            const updatedArticle = { ...newArticle.article, date: article.date };
            console.log("Submitting form", { title, description, entity, currentYear, context, hours, year, requiredECTS, location, selectedTags });
            // Add the updated article at the same position (or at the top)
            return [updatedArticle, ...filtered];
          });
          console.log("Article updated successfully:", newArticle.article);
        }
      } else {
        newArticle = await submitForm(apiURL, "internships", payload);
        // Add the new article to localinternships
        if (newArticle && newArticle.article) {
          setLocalInternships(prev => [newArticle.article, ...prev]);
        }
        queryClient.invalidateQueries(['internships']);
      }

      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <>
      <h3>Folmurário de Estágio</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            value={title} 
            onChange = {e => setTitle(e.target.value)} 
            placeholder="Insira o título do estágio"
            />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <input 
            type="text" 
            id="description" 
            name="desciption" 
            required 
            value={description} 
            onChange={e => setDescription(e.target.value)}
            placeholder="Insira uma breve descrição do estágio"
            />
        </div>
        <div className="form-group">
          <label htmlFor="entity">Entidade:</label>
          <input 
            type="text" 
            id="entity" 
            name="entity" 
            required 
            value={entity} 
            onChange={e => setDescription(e.target.value)}
            placeholder="Entidade onde o estágio será realizado"
            />
        </div>
        <div className="form-group">
          <label htmlFor="coordinator">Professor Coordenador:</label>
          <input 
            type="text" 
            id="coordinator-name" 
            name="coordinator-name" 
            required 
            value={coordinator.name} 
            onChange={e => setCoordinator(e.target.value)}
            placeholder = "Nome do professor coordenador"
            />
          <input 
            type="text" 
            id="coordinator-email" 
            name="coordinator-email" 
            required 
            value={coordinator.email} 
            onChange={e => setCoordinator(e.target.value)}
            placeholder = "Email do professor coordenador"
            />
        </div>
        <div className="form-group">
          <label htmlFor="coordinator">Coordenador:</label>
          <input type="text" id="entity" name="entity" required value={entity} onChange={e => setEntity(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="context">Contexto:</label>
            <textarea id="context" name="context" required value={context} onChange={e => setContext(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="hours">Horas:</label>
          <input 
            type="number" 
            id="hours" 
            name="hours" 
            required 
            min={200}
            max={450}
            value={hours} 
            onChange={e => setHours(e.target.value)}
            placeholder="Número de horas do estágio"
            />
        </div>
        <div className="form-group">
          <label htmlFor="year">Ano:</label>
          <input 
            type="number" 
            id="year" 
            name="year" 
            required 
            min={1}
            max={4}
            value={year} 
            onChange={e => setYear(e.target.value)}
            placeholder="Ano do estágio"
          />
        </div>
        <div className="form-group">
          <label htmlFor="requiredECTS">ECTS Requeridos:</label>
          <input 
            type="number" 
            id="requiredECTS" 
            name="requiredECTS" 
            required 
            min={65}
            max={225}
            value={requiredECTS} 
            onChange={e => setRequiredECTS(e.target.value)}
            placeholder="Número de ECTS requeridos"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Localização:</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            required 
            value={location} 
            onChange={e => setLocation(e.target.value)}
            placeholder="Localização do estágio"
          />
          {location && location.startsWith("https://www.google.com/maps/embed") && (
            <div style={{ marginTop: "1rem" }}>
              <iframe
                src={location}
                width="100%"
                height="300"
                style={{ border: 0 , borderRadius: "8px"}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Preview"
              ></iframe>
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
            <div className="tags-input-row">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && tagInput.trim()) {
                    e.preventDefault();
                    handleAddTag(tagInput.trim());
                    }
                }}
                placeholder="Adicionar tag"
                />
              <button
                type="button"
                onClick={() => handleAddTag(tagInput.trim())}
                disabled={!tagInput.trim()}
                >
                Adicionar
              </button>
            </div>
            <div className="tags-list">
              {selectedTags.map(tag => (
                <span className="tag selected" key={tag} onClick={() => handleRemoveTag(tag)}>
                  {isFinite(Number(tag)) ? `${tag}º Ano` : tag} &times; 
                </span>
              ))}
            </div>
            <div className="existing-tags-list">
              <span style={{ fontSize: '0.95em', color: '#888' }}>Tags já usadas:<br></br></span>
                {existingTags
                  .filter(tag => !selectedTags.includes(tag))
                  .map(tag => (
                    <span
                      className="tag"
                      key={tag}
                      onClick={() => handleAddTag(tag)}
                      style={{ cursor: 'pointer' }}
                    >
                    {isFinite(Number(tag)) ? `${tag}º Ano` : tag}
                  </span>
                ))}
            </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default InternshipsForm