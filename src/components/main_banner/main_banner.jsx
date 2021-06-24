import React, { useEffect, useState } from 'react';
import styles from './main_banner.module.css';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const MainBanner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(fetchUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovie(data.results[1]);
      })
      .then(console.log(movie))
      .catch((error) => console.log('error', error));
  }, [fetchUrl]);

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>{movie.name}</h1>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.buttons}>
          <button className={styles.button_play}>
            <BsPlayFill className={styles.icons} />
            <span>Play</span>
          </button>
          <button className={styles.button_moreInfo}>
            <AiOutlineInfoCircle className={styles.icons} />{' '}
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
