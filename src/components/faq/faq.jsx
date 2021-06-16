import React from 'react';
import styles from './faq.module.css';
import faq from '../../fixtures/faq.json';
import FaqCard from '../faq_card/faq_card';

const Faq = () => {
  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      {faq.map((question) => {
        return <FaqCard question={question} />;
      })}
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={styles.email}>
        <input type='text' placeholder='Email Address' />
        <button type='submit'>Get Started &gt;</button>
      </div>
    </div>
  );
};

export default Faq;
