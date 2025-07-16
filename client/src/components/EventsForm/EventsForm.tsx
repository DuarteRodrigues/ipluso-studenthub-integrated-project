/**
 * @file EventsForm.tsx
 * @description A form component for handling events.
 * 
 * @component EventsForm
 * @returns {JSX.Element} The rendered EventsForm component.
 */

//Import Packages
import React, { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// Import Styles
import './EventsForm.css';

// Import Services
import { fetchTags, submitForm } from '../../services/api.tsx';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const existingTags = await fetchTags(apiURL, "events");

console.log("Existing Tags:", existingTags);

// Define the ArticleType type
type ArticleType = {
  _id?: string;
  title: string;
  description: string;
  content: string;
  tags?: string[];
  thumbnail?: string;
  feedback?: any[];
  date?: string;
};

// Define the type for the article
type EventsFormProps = {
  onClose: () => void; // Function to close the form
  article: ArticleType | null; // The article being edited, or null for a new article
  setLocalEvents: React.Dispatch<React.SetStateAction<ArticleType[]>>; // Function to update local events state
};

const EventsForm: React.FC<EventsFormProps> = ({ onClose, article, setLocalEvents }) => {

  console.log("EventsForm Mounted");

  const [tagInput, setTagInput] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [existingTags, setExistingTags] = useState<string[]>([]);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [title, setTitle] = useState(article?.title || '');
  const [description, setDescription] = useState(article?.description || '');
  const [content, setContent] = useState(article?.content || '');

  const queryClient = useQueryClient();

  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

useEffect(() => {
  if (article) {
    setTitle(article.title || '');
    setDescription(article.description || '');
    setContent(article.content || '');
    if (article.thumbnail && typeof article.thumbnail === 'string' && article.thumbnail.startsWith('http')) {
      setThumbnailPreview(article.thumbnail);
    } else {
      setThumbnailPreview(null);
    }
    setSelectedTags(article.tags || []); 
  }
}, [article]);

    useEffect(() => {
      fetchTags(apiURL, "events").then(res => {
        if (Array.isArray(res)) {
            // If it's an array of strings
            if (typeof res[0] === "string") {
                setExistingTags(res);
            }
            // If it's an array of objects with a 'tags' property
            else if (res[0] && Array.isArray(res[0].tags)) {
                setExistingTags(res[0].tags);
            } else {
                setExistingTags([]);
            }
        } else if (res && Array.isArray(res.tags)) {
            setExistingTags(res.tags);
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
      content,
      tags: selectedTags,
      thumbnail: article?.thumbnail || "https://cdn.cosmos.so/e0dc7091-816b-4815-9149-5b10efb4248b?format=jpeg",
      feedback: article?.feedback || [],
    };

    if (!article?._id) {
      // If no article ID, set the date to today's date
      payload.date = formattedDate;
    }

    try {
      console.log("Submitting form", { title, description, content, selectedTags });

      let newArticle;
      if (article && article._id) {
        newArticle = await submitForm(apiURL, "events", payload, article._id);
        console.log("Article submitted successfully:", newArticle);
        console.log("Article Content:", newArticle.article);
        // Update the edited article in localEvents
        if (newArticle && newArticle.article) {
          setLocalEvents(prev => {
            console.log("Updating local events with new article:", newArticle.article);
            // Remove the old article
            const filtered = prev.filter(a => String(a._id) !== String(article._id));
            console.log("Filtered local events:", filtered);
            // Preserve the original state
            console.log("Submitting form", { title, description, content, selectedTags });
            // Add the updated article at the same position (or at the top)
            return [newArticle.article, ...filtered];
          });
          console.log("Article updated successfully:", newArticle.article);
        }
      } else {
        newArticle = await submitForm(apiURL, "events", payload);
        // Add the new article to localEvents
        if (newArticle && newArticle.article) {
          setLocalEvents(prev => [newArticle.article, ...prev]);
        }
        queryClient.invalidateQueries(['events']);
      }

      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h3>Formulário de Eventos</h3>
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
            placeholder="Insira o título do evento" 
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
            placeholder="Insira uma breve descrição do evento"
            />
        </div>
        <div className="form-group">
          <label htmlFor="content">Conteúdo:</label>
          <textarea 
            id="content" 
            name="content" 
            required 
            value={content} 
            onChange={e => setContent(e.target.value)}
            placeholder="Insira o conteúdo completo do evento"
            >
            </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="thumbnail">Imagem padrão:</label>
            <img
              src={article?.thumbnail || "https://cdn.cosmos.so/e0dc7091-816b-4815-9149-5b10efb4248b?format=jpeg"}
              alt="Pré-visualização"
              className="thumbnail-preview"
            />
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
                    {tag} &times;
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
                    {tag}
                    </span>
                ))}
            </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      </>
  );
}

export default EventsForm