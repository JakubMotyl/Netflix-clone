import React from 'react';
import './App.css'
import Row from './components/Row';
import requests from './components/data/Requests';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Footer from './Footer';

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
