import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/FormValidation';

function Register(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleRegister(values);
    resetForm()
  };

  return (
    <section className="register">
      <div className="register__logo-container">
        <Link to="/" className="register__logo-link">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="register__title">
          Добро пожаловать!
        </h2>
        <fieldset className="register__input-container">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={values.name || ''}                
            id="register__input-name"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"                
            required
          />
          <span className={`register__input-error ${errors.name ? "register__input-error_visible" : ""}`}>{errors.name}</span>
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={values.email || ''}                
            id="register__input-email"
            type="email"
            name="email"            
            placeholder=""                
            required
          />
          <span className={`register__input-error ${errors.email ? "register__input-error_visible" : ""}`}>{errors.email}</span>
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={values.password || ''}
            id="register__input-password"
            type="password"
            name="password" 
            placeholder=""               
            required
          />
          <span className={`register__input-error ${errors.password ? "register__input-error_visible" : ""}`}>{errors.password}</span>
        </fieldset>
        <button
          type="submit"
          className={`register__submit ${isValid ? "register__submit_abled" : "register__submit_disabled disabled"}`}
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
