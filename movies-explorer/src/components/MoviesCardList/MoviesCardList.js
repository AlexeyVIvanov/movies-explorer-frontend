import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies">
      {props.movies.map((movie) => (
        <MoviesCard
          {...movie}
          key={movie.id}
          movie={movie}
          
          
        />
      ))}      
      <button className="movies__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
