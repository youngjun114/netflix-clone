import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>Unlimited movies, TV shows, and more.</h1>
        <h2 className={styles.subtitle}>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={styles.email}>
          <input type='text' placeholder='Email Address' />
          <button type='submit'>Get Started &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
