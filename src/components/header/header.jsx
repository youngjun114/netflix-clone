import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/home');
  };

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
        <button className={styles.button} onClick={handleClick}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Header;
