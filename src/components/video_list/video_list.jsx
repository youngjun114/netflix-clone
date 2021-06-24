import React, { useState, useEffect } from 'react';
import VideoLarge from '../video_large/video_large';
import styles from './video_list.module.css';

const VideoList = ({ label, fetchUrl }) => {
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
          return <VideoLarge key={movie.id} video={movie} />;
        })}
      </div>
    </section>
  );
};

export default VideoList;
