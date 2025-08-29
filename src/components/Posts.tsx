import { useFetch } from '../hooks';
import type { Post } from '../types';

export function Posts() {
  const { data: posts, loading, error } = useFetch<Post[]>('http://localhost:3000/posts');

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="posts">
      <h2>📄 Posts</h2>
      <div className="posts-grid">
        {posts?.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-stats">
              <span>👁 {post.views} views</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
