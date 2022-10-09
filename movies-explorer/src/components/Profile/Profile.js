import React from 'react';

import { useFormWithValidation } from '../../utils/FormValidation';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from '../Header/Header';

function Profile(props) { 
  
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues({
        name: currentUser.name,
        email: currentUser.email
      });
    }
  }, [resetForm, currentUser, setValues]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleEditProfile(values);    
  };
  
  return (
    <>
    <Header
      style={{ background: "#FFFFFF" }}
    /> 
    <section className="profile">
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="profile__title">
          Привет, {currentUser.name}!
        </h2>
        <fieldset className="profile__container">          
          <label
            className="profile__label">
              Имя
            <input
              className="profile__input"
              onChange={handleChange}
              value={values.name || ''}                
              id="profile__input-name"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder={currentUser.name}                
              required            
            />
          </label>
          <span className={`profile__input-error ${errors.name ? "profile__input-error_visible" : ""}`}>{errors.name}</span>
          <hr className="profile__line" />
          <label 
            className="profile__label">
              E-mail            
            <input
              className="profile__input"
              onChange={handleChange}
              value={values.email || ''}                
              id="profile__input-email"
              type="email"
              name="email"
              placeholder={currentUser.email}                            
              required
            />
          </label>
          <span className={`profile__input-error ${errors.email ? "profile__input-error_visible" : ""}`}>{errors.email}</span>
        </fieldset>
        <button
          type="submit"
          className={`profile__btn ${isValid ? "" : "disabled"}`}>
          Редактировать
        </button>
        <button className="profile__btn-exit" onClick={props.onLogout}>
          Выйти из аккаунта
        </button>          
      </form>                
    </section>
    </>
  );
}

export default Profile;
