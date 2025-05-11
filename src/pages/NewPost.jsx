import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewPost.module.css';
import Button from '../components/Button';
import Input from '../components/Input';
import { usePosts } from '../context/PostContext';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const { posts, setPosts } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || body.trim() === '') {
      setError('Title and content are required');
      return;
    }

    if (body.length < 20) {
      setError('Content must be at least 20 characters.');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title,
      body,
    };

    setPosts([newPost, ...posts]);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Post</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          id="body"
          label="Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          textarea
        />
        <Button type="submit">Submit Post</Button>
      </form>
    </div>
  );
}
