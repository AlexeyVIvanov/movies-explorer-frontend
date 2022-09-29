import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="register">
      <div className="register__logo-container">
        <Link to="/" className="register__logo-link">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
      </div>
      <form>
        <h2 className="register__title">
          Добро пожаловать!
        </h2>
        <fieldset className="register__input-container">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            defaultValue=""                
            id="register__input-name"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"                
            required
          />
          <span className="register__input-error"></span>
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            defaultValue=""                
            id="register__input-email"
            type="email"
            name="email"
            minLength="2"
            maxLength="30"
            placeholder=""                
            required
          />
          <span className="register__input-error"></span>
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            defaultValue=""
            id="register__input-password"
            type="password"
            name="password" 
            placeholder=""               
            required
          />
          <span className="register__input-error">Что-то пошло не так...</span>
        </fieldset>
        <button
          type="submit"
          className="register__submit"
        >
          Зарегистрироваться
        </button>
        <div className="register__signin">
          <p className="register__signin-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>          
      </form>
    </section>
  );
}

export default Register;
