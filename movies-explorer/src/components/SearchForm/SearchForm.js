import React from 'react';

import { useForm } from '../../utils/FormValidation';

function SearchForm(props) {

  const { values, handleChange, setValues } = useForm();

  function handleSubmit(e) { 
    e.preventDefault();
    props.handleSearchFilm(values.searchfilm);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
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
        <input className="search__input-radio" type="checkbox" id="select" />
        Короткометражки
      </label>
      <hr className="search__line" />
            
    </section>
  );
}

export default SearchForm;
