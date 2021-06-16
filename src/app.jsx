import React from 'react';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/sign_up/sign_up';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
