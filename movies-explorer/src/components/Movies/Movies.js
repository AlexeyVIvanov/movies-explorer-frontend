import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function Movies(props) {  
  
  return (
    <>
      <Header
        style={{ background: "#FFFFFF" }}
      /> 
      <SearchForm
        handleSearchFilm={props.handleSearchFilm}
        handleCheckBox={props.handleCheckBox} />
      {props.preload ? <Preloader /> : 
        <MoviesCardList
        movies={props.movies}
        counterMovies={props.counterMovies}
        handleMoreMovies={props.handleMoreMovies}
        onLikeClick={props.onLikeClick} />
      }         
            
      <Footer />        
    </>
  );
}

export default Movies;
