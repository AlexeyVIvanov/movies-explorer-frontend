import React from 'react';

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from "react-router-dom";
import NavLinks from '../NavLinks/NavLinks';

function Header(props) {

  const location = useLocation();

  return (
    <header style={ props.style } className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <Navigation
        children={
          location.pathname === "/"
          ? 
          <>
            <div className="navigation__link-register">              
              <Link to="/signup" className="navigation__register-link">
                Регистрация
              </Link>
            </div>
            <button
              type="button"
              className="navigation__login-btn"
              >
              <Link to="/signin" className="navigation__login-link">
                Войти
              </Link>
            </button>
          </>
          : 
          <>
          <NavLinks />            
          </>
        }
      />
    </header>    
  );
}

export default Header;
