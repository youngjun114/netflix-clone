import React, { useState, useEffect, useRef } from 'react';
import VideoItem from '../video_item/video_item';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './video_list.module.css';

const VideoList = ({ label, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const listRef = useRef();

  const handleScrollRight = () => {
    listRef.current.scrollLeft += 300;
  };

  const handleScrollLeft = () => {
    listRef.current.scrollLeft -= 300;
  };

  useEffect(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(fetchUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log('error', error));
  }, [fetchUrl]);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{label}</h1>

      <div className={styles.list} ref={listRef}>
        <button className={styles.scrollLeft} onClick={handleScrollLeft}>
          <BsChevronCompactLeft className={styles.scrollIcon} />
        </button>
        {movies.map((movie) => {
          return <VideoItem key={movie.id} video={movie} isLarge={isLarge} />;
        })}
        <button className={styles.scrollRight} onClick={handleScrollRight}>
          <BsChevronCompactRight className={styles.scrollIcon} />
        </button>
      </div>
    </section>
  );
};

export default VideoList;
