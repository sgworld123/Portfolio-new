import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer({
  logo,
  brandName,
  socialLinks = [],
  mainLinks = [],
  legalLinks = [],
  copyright,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    if (!href.startsWith('/#') && !href.startsWith('#')) return; // let normal links through

    e.preventDefault();
    const hash = href.replace('/', '');
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      const section = document.querySelector(hash);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.topSection}>
          <a href="/" className={styles.brand} aria-label={brandName || "Footer"}>
            {logo}
            <span className={styles.brandName}>{brandName}</span>
          </a>

          <ul className={styles.socialLinks}>
            {socialLinks.map((link, i) => (
              <li key={i} className={styles.socialItem}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={styles.socialButton}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.linksWrapper}>

            <ul className={styles.linksList}>
              {mainLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className={`${styles.link} ${styles.mainLink}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className={styles.linksList}>
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className={styles.link}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div className={styles.copyright}>
            <span className={styles.dot}></span>
            <span>{copyright?.text}</span>
            {copyright?.license && (
              <div className={styles.license}>{copyright.license}</div>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}