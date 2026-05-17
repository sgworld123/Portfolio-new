import React from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const IconMap = {
  facebook: FaFacebookSquare,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedin
};

const Footer = () => {
  return (
    <footer id="contact" className="container">
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          {SOCIAL_LINKS.map(link => {
            const Icon = IconMap[link.icon];
            return (
              <a key={link.icon} href={link.url} className={styles.socialIcon} aria-label={link.icon}>
                <Icon size={30} />
              </a>
            );
          })}
        </div>
        <p className={styles.copyright}>Copyright ©2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
