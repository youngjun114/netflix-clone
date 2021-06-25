import React, { memo, useEffect, useState } from 'react';
import styles from './main_header.module.css';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/auth_context';
import { Link } from 'react-router-dom';
import { FaSearch, FaSortDown, FaSortUp } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';

const MainHeader = memo(() => {
  const [error, setError] = useState('');
  const [scroll, setScroll] = useState(false);
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/');
    } catch {
      setError('Failed to logout');
      console.log(error);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={scroll ? `${styles.header} ${styles.active}` : styles.header}
    >
      <div className={styles.headerLeft}>
        <img className={styles.logo} src='images/misc/logo.png' alt='logo' />
        <div className={styles.headerLinks}>
          <Link to='/home'>Home</Link>
          <Link to='/home'>Tv Shows</Link>
          <Link to='/home'>Movies</Link>
          <Link to='/home'>New & Popular</Link>
          <Link to='/home'>My List</Link>
        </div>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.searchButton}>
          <FaSearch className={styles.searchIcon} />
        </button>
        <Link to='/home'>Kids</Link>
        <Link to='/home'>DVD</Link>
        <IoIosNotifications className={styles.notification} />
        <div className={styles.user}>
          <button className={styles.userButton}>
            <img
              src='/images/users/1.png'
              className={styles.userIcon}
              alt='user'
            />
            <FaSortDown className={styles.arrow} />
            <FaSortUp className={styles.upIcon} />
          </button>
          <ul className={styles.accountDropdown}>
            <li>
              <button>Manage Profiles</button>
            </li>
            <li>
              <button>Account</button>
            </li>
            <li>
              <button>Help Center</button>
            </li>
            <li>
              <button onClick={handleLogout}>Sign out of Netflix</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default memo(MainHeader);
