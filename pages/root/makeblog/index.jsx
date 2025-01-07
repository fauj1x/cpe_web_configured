'use client';

import { useState } from 'react';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      alert('Blog berhasil dibuat!');
    }
  };

  return (
    <div>
      <h1>Buat Blog Baru</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul Blog"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Konten Blog"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}
