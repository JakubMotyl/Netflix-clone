import React from 'react';
import Row from './components/scripts/Row';
import requests from './components/data/Requests';
import Nav from './components/scripts/Nav';
import Banner from './components/scripts/Banner';
import Footer from './components/scripts/Footer';

// Generate App Function

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row fetchUrl={requests.fetchNetflixPopularMovies} title='NETFLIX POPULAR' />
      <Row isLarge={true} fetchUrl={requests.fetchNetflixTopRatedMovies} title='TOP RATED MOVIES' />
      <Row fetchUrl={requests.fetchNetflixTopRatedSeries} title='TOP RATED SERIES' />
      <Row fetchUrl={requests.fetchNetflixComedyMovies} title='COMEDY MOVIES' />
      <Row fetchUrl={requests.fetchNetflixDocumentaryMovies} title='DOCUMENTARY MOVIES' />
      <Row fetchUrl={requests.fetchNetflixRomanceMovies} title='ROMANCE MOVIES' />
      <Row fetchUrl={requests.fetchNetflixFamilyMovies} title='FAMILY MOVIES' />
      <Row fetchUrl={requests.fetchNetflixMusicMovies} title='MUSIC MOVIES' />
      <Footer />
    </div>
  )
}

export default App
