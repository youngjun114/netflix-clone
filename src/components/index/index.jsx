import React from 'react';
import Jumbotron from '../jumbotron/jumbotron';
import Banner from '../banner/banner';
import Header from '../header/header';
import styles from './index.module.css';
const Index = () => {
  return (
    <div className={styles.bg_black}>
      <Header />
      <Banner />
      <Jumbotron />
    </div>
  );
};

export default Index;
