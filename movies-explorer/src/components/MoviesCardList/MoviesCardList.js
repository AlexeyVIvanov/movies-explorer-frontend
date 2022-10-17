import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {  
  
  return (
    <section className="movies">
      {props.movies.slice(0, props.counterMovies).map((movie) => (
        <MoviesCard
          {...movie}
          key={movie.id}
          movie={movie}         
          onLikeClick={props.onLikeClick}
        />
      ))}      
      <button
        className={`movies__button ${props.movies.length > props.counterMovies ? "movies__button_visible" : ""}`}
        onClick={props.handleMoreMovies}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
