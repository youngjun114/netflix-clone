import React, { useRef, useState } from 'react';
import styles from './login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth_context';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      formRef.current.reset();
      history.push('/home');
    } catch {
      setError('Failed to login');
    }
    setLoading(false);
  };
  return (
    <div className={styles.layout}>
      <div className={styles.loginHeader}>
        <img className={styles.logo} src='images/misc/logo.png' alt='logo' />
      </div>
      <div className={styles.loginContainer}>
        {error && <div className={styles.alert}>{error}</div>}
        <h1>Sign in</h1>
        <form
          ref={formRef}
          className={styles.loginForm}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputContainer}>
            <input
              ref={emailRef}
              className={styles.email}
              type='email'
              placeholder='Email'
            />
            <label>Email</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              ref={passwordRef}
              className={styles.password}
              type='password'
              placeholder='Password'
            />
            <label>Password</label>
          </div>
          <button disabled={loading} className={styles.button} type='submit'>
            Sign in
          </button>
        </form>
        <span>
          New To Netflix? <Link to='/signup'>Sign up now.</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
