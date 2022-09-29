import React from 'react';

import landinglogo from '../../images/landing-logo.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <h2 className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>
        <button
          type="button"
          className="promo__btn">
          <a href="#Project" className="promo__link">
            Узнать больше
          </a>          
        </button>
      </div>
      <img className="promo__logo" src={landinglogo} alt="Логотип"/>      
    </section>
  );
}

export default Promo;
