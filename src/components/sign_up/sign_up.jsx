import React, { useRef, useState } from 'react';
import styles from './sign_up.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth_context';

const Signup = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      formRef.current.reset();
      history.push('/home');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpHeader}>
        <img src='images/misc/logo.png' alt='logo' />
        <Link to='/login'>Sign In</Link>
      </div>
      <div className={styles.formContainer}>
        {error && <div className={styles.alert}>{error}</div>}
        <h3>Create your account</h3>
        <form
          ref={formRef}
          className={styles.signUpForm}
          onSubmit={handleSubmit}
        >
          <input
            ref={emailRef}
            className={styles.email}
            type='email'
            required
            placeholder='Email'
          />
          <input
            ref={passwordRef}
            className={styles.password}
            type='password'
            placeholder='Add a password'
            required
          />
          <input
            ref={passwordConfirmRef}
            className={styles.password}
            type='password'
            placeholder='Confirm password'
            required
          />
          <button disabled={loading} className={styles.button} type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
