import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addPost, deletePost, editPost, logout } from '../store/actions';
import type { Post } from '../store/types';
import AddPostForm from '../components/posts/AddPostForm';
import EditPostModal from '../components/posts/EditPostModal';
import { useNavigate } from 'react-router-dom';

const PostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { posts, loading, error } = useAppSelector((s) => s.posts);
  const user = useAppSelector((s) => s.auth.currentUser);

  const [editing, setEditing] = useState<Post | null>(null);

  const onAdd = (title: string, body: string) => {
    dispatch(addPost({ title, body }));
  };

  const onEdit = (p: Post) => {
    setEditing(p);
  };
  const onDelete = (id: number) => {
    dispatch(deletePost(id));
  };
  const onSave = (p: Post) => {
    dispatch(editPost(p));
    setEditing(null);
  };

  const onLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Posts</h2>
        <div>
          <span style={{ marginRight: 12 }}>Hi, {user?.username}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>

      <AddPostForm onAdd={onAdd} />

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
        {posts.map((p) => (
          <li key={p.id} style={{ border: '1px solid #ddd', borderRadius: 6, padding: 12 }}>
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{p.body}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => onEdit(p)}>Edit</button>
              <button onClick={() => onDelete(p.id)} style={{ color: 'crimson' }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <EditPostModal post={editing} onClose={() => setEditing(null)} onSave={onSave} />
    </div>
  );
};

export default PostsPage;
