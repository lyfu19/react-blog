import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EditPost.module.css';
import Input from '../components/Input';
import Button from '../components/Button';
import { usePosts } from '../context/PostContext';

export default function EditPost() {
  const { id } = useParams();
  const { posts, setPosts } = usePosts();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const post = posts.find((p) => p.id === Number(id));
    if (!post) {
      setError('Post not found.');
      return;
    }

    setTitle(post.title);
    setBody(post.body);
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || body.trim() === '') {
      setError('Title and content cannot be empty.');
      return;
    }

    const updatedPosts = posts.map((p) =>
      p.id === Number(id) ? { ...p, title, body } : p
    );
    setPosts(updatedPosts);

    navigate('/');
  };

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Post</h1>
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
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
}
