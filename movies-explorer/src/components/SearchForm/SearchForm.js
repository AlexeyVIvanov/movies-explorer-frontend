import React from 'react';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <fieldset className="search_input-container">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name="searchfilm"
            /*value={""}*/
            defaultValue=""            
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
