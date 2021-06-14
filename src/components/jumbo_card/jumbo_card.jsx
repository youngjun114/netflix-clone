import React from 'react';
import styles from './jumbo_card.module.css';

const JumboCard = ({ item, index }) => {
  const { title, subTitle, image } = item;
  const isEven = () => {
    if ((index + 1) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className={styles.container}>
      <article
        className={
          isEven() ? styles.cardContainerReverse : styles.cardContainer
        }
      >
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <img className={styles.image} src={image} alt='jumbo' />
      </article>
    </section>
  );
};

export default JumboCard;
