import React, { useState } from 'react';
import films from '../../fixtures/movies.json';
import MainHeader from '../main_header/main_header';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.home}>
      <MainHeader />
    </div>
  );
};

export default Home;
