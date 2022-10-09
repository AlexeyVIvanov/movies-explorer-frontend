import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/FormValidation';

function Login(props) {
  
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogin(values);
    resetForm()
  };

  return (
    <section className="login">
      <div className="login__logo-container">
        <Link to="/" className="login__logo-link">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="login__title">
          Рады видеть!
        </h2>
        <fieldset className="login__input-container">          
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            onChange={handleChange}
            value={values.email || ''}                           
            id="login__input-email"
            type="email"
            name="email"            
            placeholder=""                
            required
          />
          <span className={`login__input-error ${errors.email ? "login__input-error_visible" : ""}`}>{errors.email}</span>
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            onChange={handleChange}
            value={values.password || ''}            
            id="login__input-password"
            type="password"
            name="password" 
            placeholder=""               
            required
          />
          <span className={`login__input-error ${errors.password ? "login__input-error_visible" : ""}`}>{errors.password}</span>
        </fieldset>
        <button
          type="submit"
          className={`login__submit ${isValid ? "login__submit_abled" : "login__submit_disabled disabled"}`}
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
