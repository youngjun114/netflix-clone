import React, { useState } from 'react';
import styles from './faq_card.module.css';
import { BsPlus, BsX } from 'react-icons/bs';

const FaqCard = ({ question }) => {
  const [expand, setExpand] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setExpand(!expand);
  };
  return (
    <article className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <h2>{question.header}</h2>
        {expand ? (
          <BsX className={styles.icon} />
        ) : (
          <BsPlus className={styles.icon} />
        )}
      </button>
      <p className={expand ? styles.body : styles.bodyCollapse}>
        {question.body}
      </p>
    </article>
  );
};

export default FaqCard;
