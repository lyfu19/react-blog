import { useParams, useNavigate, Link } from 'react-router-dom';
import styles from './PostDetail.module.css';
import Button from '../components/Button';
import { usePosts } from '../context/PostContext';

export default function PostDetail() {
  const { id } = useParams();
  const { posts, setPosts } = usePosts();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h1>Post not found.</h1>;
  }

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this post?'
    );
    if (!confirmed) {
      return;
    }

    const updatedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(updatedPosts);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.actions}>
        <Button onClick={handleDelete} variant="danger">
          Delete
        </Button>
        <Link
          to={`/edit/${post.id}`}
          className={`${styles.button} ${styles.editButton}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
