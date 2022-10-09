import React from 'react';

import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const location = useLocation();

  return (
    <>
    <section className="card">
      <div className="card__info">
        <h2 className="card__title">{props.movie.nameRU}</h2>
        <p className="card__duration">{props.movie.duration}</p>
        <button type="button" className={
          location.pathname === "/movies"
          ? "card__like card__like_active"
          : "card__cross"}>
        </button>        
      </div>
      <img className="card__image" src={props.movie.image} alt="Кадр фильма" />  
    </section>        
  </>
  );
}

export default MoviesCard;
