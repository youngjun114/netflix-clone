import React from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Jumbotron />
    </div>
  );
}

export default App;
