import React, { useState, useEffect } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ label, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
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
      <div className={styles.list}>
        {movies.map((movie) => {
          return <VideoItem key={movie.id} video={movie} isLarge={isLarge} />;
        })}
      </div>
    </section>
  );
};

export default VideoList;
