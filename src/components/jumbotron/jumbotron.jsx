import React from 'react';
import styles from './jumbotron.module.css';
import jumbo from '../../fixtures/jumbo.json';
import JumboCard from '../jumbo_card/jumbo_card';

const Jumbotron = () => {
  return (
    <div className={styles.container}>
      {jumbo.map((item, index) => {
        return <JumboCard key={item.id} item={item} index={index} />;
      })}
    </div>
  );
};

export default Jumbotron;
