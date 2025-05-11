import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.css';
import { usePosts } from './context/PostContext';

function App() {
  const { loading } = usePosts();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/new" className={styles.navLink}>
          New Post
        </Link>
      </nav>
      <hr className={styles.divider} />
      {loading ? <p>Loading</p> : <Outlet />}
    </div>
  );
}

export default App;
