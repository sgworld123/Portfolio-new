import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import styles from './MainLayout.module.css';
import { footerData } from '../services/footerMockData';

const MainLayout = () => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer {...footerData} />
    </div>
  );
};

export default MainLayout;
