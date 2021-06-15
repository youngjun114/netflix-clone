import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src='images/misc/logo.png' alt='logo' />
      </div>
      <div className={styles.headerRight}>
        <select className={styles.language}>
          <option>English</option>
          <option>Español</option>
        </select>
        <button className={styles.button}>Sign in</button>
      </div>
    </nav>
  );
};

export default Header;
