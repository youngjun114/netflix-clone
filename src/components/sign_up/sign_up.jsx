import React, { useRef } from 'react';
import styles from './sign_up.module.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpHeader}>
        <img src='images/misc/logo.png' alt='logo' />
        <Link to='/login'>Sign In</Link>
      </div>
      <div className={styles.formContainer}>
        <h3>Create your account</h3>
        <form ref={formRef} className={styles.signUpForm}>
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
          <button className={styles.button} type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
