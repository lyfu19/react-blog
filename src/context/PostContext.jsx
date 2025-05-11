import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Article failed to load:', err);
        setLoading(false);
      });
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, loading }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
}

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
