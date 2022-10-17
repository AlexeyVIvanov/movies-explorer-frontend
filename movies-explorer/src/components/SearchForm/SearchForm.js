import React from 'react';

import { useLocation } from "react-router-dom";
import { useForm } from '../../utils/FormValidation';

function SearchForm(props) {

  const { values, handleChange, setValues } = useForm();
  const location = useLocation();

  function handleSubmit(e) { 
    e.preventDefault();
    props.handleSearchFilm(values.searchfilm);
  };

  function handleSubmitSavedFilms(e) { 
    e.preventDefault();
    props.handleSavedFilm(values.searchfilm);
  };

  return (
    <section className="search">
      <form className="search__form"
            onSubmit={
              location.pathname === "/movies"
            ? handleSubmit
            : handleSubmitSavedFilms}>
        <fieldset className="search_input-container">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name="searchfilm"
            value={values.searchfilm || ''}
            onChange={handleChange}
            required            
            />
        </fieldset>
        <button
          className="search__btn"
          type="submit">
          Найти
        </button>
      </form>
      <label className="search__label-radio">
        <input
          className="search__input-radio" type="checkbox" id="select"
          onClick={props.handleCheckBox} />
        Короткометражки
      </label>
      <hr className="search__line" />
            
    </section>
  );
}

export default SearchForm;
