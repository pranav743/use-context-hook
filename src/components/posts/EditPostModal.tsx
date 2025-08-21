import React, { useEffect, useState } from 'react';
import type { Post } from '../../store/types';

type Props = {
  post: Post | null;
  onClose: () => void;
  onSave: (post: Post) => void;
};

const modalStyle: React.CSSProperties = {};
const cardStyle: React.CSSProperties = { minWidth: 320, maxWidth: '80vw' };

const EditPostModal: React.FC<Props> = ({ post, onClose, onSave }) => {
  const [title, setTitle] = useState(post?.title ?? '');
  const [body, setBody] = useState(post?.body ?? '');

  useEffect(() => {
    setTitle(post?.title ?? '');
    setBody(post?.body ?? '');
  }, [post]);

  if (!post) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...post, title, body });
  };

  return (
    <dialog open style={modalStyle} onCancel={onClose}>
      <div style={cardStyle}>
        <h3>Edit Post</h3>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ padding: 8 }} />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" style={{ padding: 8 }} />
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditPostModal;
