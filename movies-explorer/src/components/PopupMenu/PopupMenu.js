import React from 'react';

import { Link } from 'react-router-dom';

function PopupMenu() {

  return (
    <section className="popupmenu popupmenu_active">
      <div className="popupmenu__modal-window">
        <button className="popupmenu__btn"></button>
        <nav className="popupmenu__menu">
          <Link to="/" className="popupmenu__link">
            Главная  
          </Link>
          <Link to="/movies" className="popupmenu__link">
            Фильмы   
          </Link>
          <Link to="/saved-movies" className="popupmenu__link">
            Сохранённые фильмы    
          </Link>
        </nav>
        <button
          type="button"
          className="popupmenu__profile-btn"
          >
          <Link to="/profile" className="popupmenu__profile-link">
            Аккаунт
          </Link>
        </button>
      </div> 
      <div className="popupmenu__overlay"></div>     
    </section>
  );
}

export default PopupMenu;
