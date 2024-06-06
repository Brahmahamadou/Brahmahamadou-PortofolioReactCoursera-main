import React, { useState } from 'react';

const BlogSection = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    setBlogPosts([...blogPosts, newPost]);
    // Réinitialiser les champs du formulaire après la soumission
    setTitle('');
    setContent('');
  };

  return (
    <section id="blog-section">
      <h2>Blog</h2>
      {/* Formulaire de rédaction d'article */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenu de l'article"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Publier</button>
      </form>
      {/* Affichage des articles */}
      <div>
        {blogPosts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
