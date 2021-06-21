import React from 'react';
import Index from './components/index';
import Login from './components/login/login';
import Signup from './components/sign_up/sign_up';
import Home from './components/home/home';
import PrivateRoute from './components/private_route/private_route';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth_context';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <AuthProvider>
          <PrivateRoute path='/home' component={Home}></PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </AuthProvider>
      </Switch>
    </div>
  );
}

export default App;
