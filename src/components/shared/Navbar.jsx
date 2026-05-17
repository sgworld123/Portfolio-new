import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { NAVIGATION_LINKS } from '../../constants';
import styles from './Navbar.module.css';
import { classNames } from '../../utils/helpers';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close menu on route change / scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  return (
    <>
      <nav className={classNames(styles.nav, scrolled ? styles.scrolled : '')}>
        {/* Logo — hidden on mobile until scrolled */}
        <div className={styles.logo}>YourLogo</div>

        {/* Links — desktop */}
        <div className={styles.links}>
          {NAVIGATION_LINKS.map(link =>
            link.path.startsWith('#') ?
              <a key={link.label} href={`/${link.path}`} className={styles.link}>
                {link.label}
              </a> :
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => classNames(styles.link, isActive ? styles.active : '')}
              >
                {link.label}
              </NavLink>
          )}
        </div>

        {/* Right side */}
        <div className={styles.right}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Dark Mode">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {/* Hamburger — mobile only */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={classNames(styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : '')}>
        {NAVIGATION_LINKS.map(link =>
          link.path.startsWith('#') ?
            <a key={link.label} href={`/${link.path}`} className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a> :
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) => classNames(styles.mobileLink, isActive ? styles.active : '')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
        )}
      </div>
    </>
  );
};

export default Navbar;