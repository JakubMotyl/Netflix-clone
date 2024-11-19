const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflixPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixTopRatedSeries: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchNetflixDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchNetflixRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchNetflixFamilyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  fetchNetflixMusicMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`,
};

export default requests;
