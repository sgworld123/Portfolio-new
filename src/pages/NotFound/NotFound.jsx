import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import { useTheme } from '../../hooks/useTheme';

export function NotFoundPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={theme === 'light' ? styles.gifBox1 : styles.gifBox2}>
          <video
            key={theme}
            autoPlay
            loop
            muted
            playsInline
            className={styles.gifVideo}
          >
            <source src={theme === 'light' ? '/gif1.mp4' : '/gif2.mp4'} type="video/mp4" />
          </video>
        </div>
        <h1 className={styles.code}>404</h1>
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