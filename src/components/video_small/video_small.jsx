import React from 'react';
import styles from './video_small.module.css';

const VideoSmall = ({ video }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className={styles.posterContainer}>
      <img
        src={`${baseUrl}${video.poster_path}`}
        alt={video.name}
        className={styles.poster}
      />
    </div>
  );
};

export default VideoSmall;
