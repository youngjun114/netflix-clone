import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import VideoItem from '../video_item/video_item';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './video_list.module.css';

//scrollWidth = 4832(totalWidth including overflow), clientWidth=1425(containerWidth)

const VideoList = memo(({ label, fetchUrl, isLarge }) => {
  const listRef = useRef();
  const [movies, setMovies] = useState([]);

  const handleScrollRight = useCallback(() => {
    listRef.current.scrollLeft += 400;
  }, []);

  const handleScrollLeft = useCallback(() => {
    listRef.current.scrollLeft -= 400;
  }, []);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      await fetch(fetchUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => console.log('error', error));
    }
    fetchData();
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
});

export default memo(VideoList);
