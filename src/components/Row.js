import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from './data/axios';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const image_url = 'https://image.tmdb.org/t/p/original';

function Row({ fetchUrl, title, isLarge }) {
  const[movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    // FETCH DATA
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
      
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const trailerOpts = {
    playerVars: {
      autoplay: 1,
      loop: 1,
    }
  }

  const runTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.original_title || '').then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(err => console.log('Error', err));
    }
  }
  
  return (
    <div className='row'>
      <h1 className='row__title'>{title}</h1>
      <div className='row__posters'>
        {movies.map(movie => {
          // GENERATE ROW IMAGE
          return (
            <img
              onClick={() => runTrailer(movie)}
              key={movie.id}
              src={isLarge ? `${image_url}${movie.poster_path}` : `${image_url}${movie.backdrop_path || movie.poster_path}`} 
              alt={movie.title || movie.name}
              className={isLarge ? 'row__posterLarge row__poster' : 'row__poster'}
            />
          )
        })};
      </div>
      {trailerUrl && 
        <Youtube 
          className='banner__video'
          videoId={trailerUrl} 
          opts={trailerOpts} 
        />
      }
    </div>
  )
}

export default Row
