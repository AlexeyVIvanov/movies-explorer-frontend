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
        handleCheckBox={props.handleCheckBox}
        handleSavedFilm={props.handleSavedFilm} />
      <MoviesCardList
        movies={props.movies}
        counterMovies={props.counterMovies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
