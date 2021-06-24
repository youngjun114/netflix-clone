const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchNetflix: `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,
  fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
};

export default requests;
