import React from 'react';
import styles from './video_large.module.css';

const VideoLarge = ({ video }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <img
        src={`${baseUrl}${video.poster_path}`}
        alt={video.name}
        className={styles.poster}
      />
    </div>
  );
};

export default VideoLarge;
