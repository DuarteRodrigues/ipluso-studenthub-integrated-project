/**
 * @file NewsForm.tsx
 * @description Form component for creating or editing news articles.
 * 
 * @component NewsForm
 * @returns {JSX.Element} A form component that allows users to create or edit news articles.
 */

// Import Packages
import React, { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query'; 

// Import Styles
import './NewsForm.css';

// Import Services
import { fetchTags, submitForm } from '../../services/api.tsx';

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const existingTags = await fetchTags(apiURL, "news");

console.log("Existing Tags:", existingTags);

// Define the ArticleType type
type ArticleType = {
  _id?: string;
  title: string;
  description: string;
  content: string;
  author: string;
  tags?: string[];
  thumbnail?: string;
  feedback?: any[];
  date?: string;
};

// Define the type for the article
type NewsFormProps = {
  onClose: () => void; // Function to close the form
  article: ArticleType | null; // The article being edited, or null for a new article
  setLocalNews: React.Dispatch<React.SetStateAction<ArticleType[]>>; // Function to update local news state
};

const NewsForm: React.FC<NewsFormProps>= ({ onClose, article, setLocalNews }) => {

  console.log("NewsForm Mounted");

  const [tagInput, setTagInput] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [existingTags, setExistingTags] = useState<string[]>([]);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [title, setTitle] = useState(article?.title || '');
  const [description, setDescription] = useState(article?.description || '');
  const [content, setContent] = useState(article?.content || '');
  const [author, setAuthor] = useState(article?.author || '');

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
        fetchTags(apiURL, "news").then(res => {
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
        content,
        author,
        tags: selectedTags,
        date: formattedDate,
        thumbnail: article?.thumbnail || "https://cdn.cosmos.so/e0dc7091-816b-4815-9149-5b10efb4248b?format=jpeg",
        feedback: article?.feedback || [],
    };

    if (!article?._id) {
        // If no article ID, set the date to today's date
        payload.date = formattedDate;
    }

    try {
    console.log("Submitting form", { title, description, content, author, selectedTags });

    let newArticle;
    if (article && article._id) {
    newArticle = await submitForm(apiURL, "news", payload, article._id);
    console.log("Article submitted successfully:", newArticle);
    console.log("Article Content:", newArticle.article);
    // Update the edited article in localNews
        if (newArticle && newArticle.article) {
            setLocalNews(prev => {
                console.log("Updating local news with new article:", newArticle.article);
                // Remove the old article
                const filtered = prev.filter(a => String(a._id) !== String(article._id));
                console.log("Filtered local news:", filtered);
                // Preserve the original date
                const updatedArticle = { ...newArticle.article, date: article.date };
                console.log("Submitting form", { title, description, content, author, selectedTags });
                // Add the updated article at the same position (or at the top)
                return [updatedArticle, ...filtered];
            });
            console.log("Article updated successfully:", newArticle.article);
        }
    } else {
      newArticle = await submitForm(apiURL, "news", payload);
      // Add the new article to localNews
      if (newArticle && newArticle.article) {
        setLocalNews(prev => [newArticle.article, ...prev]);
      }
      queryClient.invalidateQueries(['news']);
    }

    onClose();
  } catch (error) {
    console.error("Error submitting form:", error);
  }
  };

  return (
    <>
      <h3>Formulário de Notícia</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Insira o título da notícia"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              id="description"
              name="description"
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Insira uma breve descrição da notícia"
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
              placeholder="Insira o conteúdo completo da notícia"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              id="author"
              name="author"
              required
              value={author}
              onChange={e => setAuthor(e.target.value)}
              placeholder="Nome do autor"
            />
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

  )
}

export default NewsForm