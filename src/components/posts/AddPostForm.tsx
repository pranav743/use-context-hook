import React, { useState } from 'react';

type Props = {
  onAdd: (title: string, body: string) => void;
};

const AddPostForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onAdd(title.trim(), body.trim());
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ flex: 1, padding: 8 }} />
      <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" style={{ flex: 2, padding: 8 }} />
      <button type="submit" style={{ padding: '8px 12px' }}>Add</button>
    </form>
  );
};

export default AddPostForm;
