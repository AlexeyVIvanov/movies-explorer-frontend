import React from 'react';

import { useLocation } from "react-router-dom";
import picture from '../../images/picture.jpg';

function MoviesCard() {

  const location = useLocation();

  return (
    <>
    <section className="card">
      <div className="card__info">
        <h2 className="card__title">33 слова о дизайне</h2>
        <p className="card__duration">1ч 42м</p>
        <button type="button" className={
          location.pathname === "/movies"
          ? "card__like card__like_active"
          : "card__cross"}>
        </button>        
      </div>
      <img className="card__image" src={picture} alt="Кадр фильма" />  
    </section>
    <section className="card">
      <div className="card__info">
        <h2 className="card__title">33 слова о дизайне</h2>
        <p className="card__duration">1ч 42м</p>
        <button type="button" className={
          location.pathname === "/movies"
          ? "card__like"
          : "card__cross"}>
        </button>        
      </div>
      <img className="card__image" src={picture} alt="Кадр фильма" />  
    </section>    
  </>
  );
}

export default MoviesCard;
