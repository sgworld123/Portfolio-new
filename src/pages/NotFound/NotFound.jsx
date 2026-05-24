import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import { useTheme } from '../../hooks/useTheme';

export function NotFoundPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const gifUrl = theme === 'light'
    ? 'https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
    : 'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={theme === 'light' ? styles.gifBox1 : styles.gifBox2}>
          <h1 className={styles.code}>404</h1>
        </div>
        <div className={styles.content}>
          <h3>Look like you're lost</h3>
          <p>The page you are looking for is not available!</p>
          <button onClick={() => navigate('/')} className={styles.btn}>
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
}