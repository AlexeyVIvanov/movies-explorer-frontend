import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__logo-container">
        <Link to="/" className="login__logo-link">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
      </div>
      <form>
        <h2 className="login__title">
          Рады видеть!
        </h2>
        <fieldset className="login__input-container">          
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            defaultValue=""                
            id="login__input-email"
            type="email"
            name="email"
            minLength="2"
            maxLength="30"
            placeholder=""                
            required
          />
          <span className="login__input-error"></span>
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            defaultValue=""
            id="login__input-password"
            type="password"
            name="password" 
            placeholder=""               
            required
          />
          <span className="login__input-error">Что-то пошло не так...</span>
        </fieldset>
        <button
          type="submit"
          className="login__submit"
        >
          Войти
        </button>
        <div className="login__signin">
          <p className="login__signin-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </div>          
      </form>
    </section>
  );
}

export default Login;
