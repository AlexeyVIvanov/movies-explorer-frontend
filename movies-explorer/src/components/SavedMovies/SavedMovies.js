import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies(props) {  
  
  return (
    <>
      <Header
        style={{ background: "#FFFFFF" }}
      /> 
      <SearchForm
        handleSearchFilm={props.handleSearchFilm} />
      <MoviesCardList
        movies={props.movies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
