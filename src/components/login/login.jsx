import React, { useRef } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  return (
    <div className={styles.layout}>
      <div className={styles.loginHeader}>
        <img className={styles.logo} src='images/misc/logo.png' alt='logo' />
      </div>
      <div className={styles.loginContainer}>
        <h1>Sign in</h1>
        <form ref={formRef} className={styles.loginForm}>
          <div className={styles.inputContainer}>
            <input ref={emailRef} className={styles.email} type='email' />
            <label>Email</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              ref={passwordRef}
              className={styles.password}
              type='password'
            />
            <label>Password</label>
          </div>

          <button className={styles.button} type='submit'>
            Sign in
          </button>
        </form>
        <span>
          New To Netflix? <Link to='/'>Sign up now.</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
