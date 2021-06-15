import React from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <Jumbotron />
    </div>
  );
}

export default App;
