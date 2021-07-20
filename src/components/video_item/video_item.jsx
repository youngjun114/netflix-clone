import React, { memo } from 'react';
import styles from './video_item.module.css';

// used memo to not render when scroll button is clicked.

const VideoItem = memo(({ video, isLarge }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  // const [genres, setGenres] = useState([]);
  // useEffect(() => {
  //   const results = [];
  //   video.genre_ids.forEach((id) => {
  //     results.push(getGenre(id));
  //   });
  //   setGenres(results);
  // }, [video]);
  return (
    <img
      src={
        isLarge
          ? `${baseUrl}${video.poster_path}`
          : `${baseUrl}${video.backdrop_path}`
      }
      alt={video.name}
      className={isLarge ? styles.posterLarge : styles.posterSmall}
    />
  );
});

// const getGenre = (genre) => {
//   switch (genre) {
//     case 28:
//       return 'Action';
//     case 12:
//       return 'Adventure';
//     case 16:
//       return 'Animation';
//     case 35:
//       return 'Comedy';
//     case 80:
//       return 'Crime';
//     case 99:
//       return 'Documentary';
//     case 18:
//       return 'Drama';
//     case 10751:
//       return 'Family';
//     case 14:
//       return 'Fantasy';
//     case 36:
//       return 'History';
//     case 27:
//       return 'Horror';
//     case 10402:
//       return 'Music';
//     case 9648:
//       return 'Mystery';
//     case 10749:
//       return 'Romance';
//     case 878:
//       return 'Science Fiction';
//     case 10770:
//       return 'TV Movie';
//     case 53:
//       return 'Thriller';
//     case 10752:
//       return 'War';
//     case 37:
//       return 'Western';
//     case 10762:
//       return 'Kids';
//     case 10763:
//       return 'News';
//     case 10765:
//       return 'Sci-Fi & Fantasy';
//     case 10767:
//       return 'Talk';
//     case 10768:
//       return 'War & Politics';
//     case 10764:
//       return 'Reality';
//     case 10766:
//       return 'Soap';
//     case 10759:
//       return 'Action & Adventure';
//     default:
//       return '';
//   }
// };

export default memo(VideoItem);

/* <card className={styles.videoDesc}>
        <div className={styles.buttons}>
          <button>
            <BiPlay className={styles.play} />
          </button>
          <button>
            <BsPlusCircle className={styles.plus} />
          </button>
          <button>
            <FiChevronDown className={styles.down} />
          </button>
        </div>
        <h2 className={styles.title}>{video.name}</h2>
        <div className={styles.genres}>
          {genres.map((genre) => {
            return <span>{genre}</span>;
          })}
        </div>
      </card> */
