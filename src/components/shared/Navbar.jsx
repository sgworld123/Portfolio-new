import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { NAVIGATION_LINKS } from '../../services/mockData';
import styles from './Navbar.module.css';
import { classNames } from '../../utils/helpers';
import logo from '../../assets/logo2.png';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);

    const hash = path.replace('/', ''); // "/#home" → "#home"
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

  const renderLink = (link, mobile = false) => {
    const className = mobile ? styles.mobileLink : styles.link;

    // hash links (our nav sections)
    if (link.path.startsWith('/#') || link.path.startsWith('#')) {
      return (
        <a
          key={link.label}
          href={link.path}
          className={className}
          onClick={(e) => handleNavClick(e, link.path)}
        >
          {link.label}
        </a>
      );
    }

    // regular page routes
    return (
      <NavLink
        key={link.label}
        to={link.path}
        className={({ isActive }) => classNames(className, isActive ? styles.active : '')}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </NavLink>
    );
  };

  return (
    <>
      <nav className={classNames(styles.nav, scrolled ? styles.scrolled : '')}>
        <div className={styles.logo}><img src={logo} alt="Logo" /></div>

        <div className={styles.links}>
          {NAVIGATION_LINKS.map(link => renderLink(link, false))}
        </div>

        <div className={styles.right}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Dark Mode">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={classNames(styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : '')}>
        {NAVIGATION_LINKS.map(link => renderLink(link, true))}
      </div>
    </>
  );
};

export default Navbar;