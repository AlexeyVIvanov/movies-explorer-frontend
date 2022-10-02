import React from 'react';

import { Link } from "react-router-dom";

function NavLinks() {

  return (
    <section className="navlinks">
      <div className="navlinks__links">
              <Link to="/movies" className="navlinks__link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="navlinks__link">
                Сохраненные фильмы
              </Link>
            </div>
            <button
              type="button"
              className="navlinks__profile-btn"
              >
              <Link to="/profile" className="navlinks__profile-link">
                Аккаунт
              </Link>
            </button>            
    </section>
  );
}

export default NavLinks;
