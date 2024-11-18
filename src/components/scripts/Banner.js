import React, { useEffect, useState } from 'react'
import '../styles/Banner.css'
import axios from '../data/axios'
import requests from '../data/Requests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons'

// Generate Banner Function

function Banner() {
  const [startMovie, setStartMovie] = useState([])

  // Fetch Data

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.fetchNetflixPopularMovies);
      // console.log(res.data.results[0]);     
      setStartMovie(
        res.data.results[
          Math.floor(Math.random() * (res.data.results.length - 1))
        ]
      );
      return res;
    }
    fetchData();
  }, []);

  // console.log(startMovie);

  // Truncate Text Function

  const truncateText = (text, length) => {
    if(!text || text.length <= length) {
      return text || '';
    }
    return text.substr(0, length) + '\u2026'
  }
  

  return (
    <div className='banner-container' style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(
        'https://image.tmdb.org/t/p/original/${startMovie.backdrop_path}')`,
    }}>
      
      <div className='banner__description'>
        <p className='banner__title'>{startMovie.title || startMovie.name}</p>
        <p className='banner__overview'>{truncateText(startMovie.overview, 145)}</p>
        <div className='banner__buttons'>
          <a href='#' className='banner__button banner__button-watch'>
            <div className='banner__button-content'>
              <FontAwesomeIcon className='banner__button-icon' icon={faPlay} />
              <p className='banner__button-text'>Watch</p>
            </div>
          </a>
          <a href='#' className='banner__button banner__button-info'>
            <div className='banner__button-content'>
              <FontAwesomeIcon className='banner__button-icon' icon={faInfo} />
              <p className='banner__button-text'>More Informations</p>
            </div>
          </a>
        </div>
      </div>
      <div className='banner-container--fadeBottom'></div>
    </div>
  )
}

export default Banner
