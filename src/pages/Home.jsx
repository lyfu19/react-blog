import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { usePosts } from '../context/PostContext';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const { posts } = usePosts();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  // useMemo here just for practicing
  const filteredPosts = useMemo(() => {
    return posts.filter((p) =>
      p.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, posts]);

  function highlightMatch(text, query) {
    if (!query) {
      return text;
    }

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div>
      <h1 className={styles.title}>Blog List</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />

      {filteredPosts.length === 0 ? (
        <p className={styles.empty}>No posts found</p>
      ) : (
        <ul className={styles.postList}>
          {filteredPosts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <Link to={`/posts/${post.id}`} className={styles.postLink}>
                {highlightMatch(post.title, debouncedQuery)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
