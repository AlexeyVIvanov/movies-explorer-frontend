import React from 'react';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  //const isOwn = props.card.owner === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  //const cardDeleteButtonClassName = `card__trash ${
  //  isOwn ? "card__trash" : "card__trash_hidden"
  //}`;

  const [isLiked, setIsLiked] = React.useState(false);

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  //const isLiked = props.card.likes.some((i) => i === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : ""
  }`;

  function handleLikeClick() {
    if (!isLiked) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    } 
    //setIsLiked(true);
  }

  function handleLikeSavedFilms(e) { 
    e.preventDefault();
    debugger
    // props.movie ????
    props.onLikeClick(props.movie);
    debugger
  };

  return (
    <>
    <section className="card">
      <div className="card__info">
        <h2 className="card__title">{props.movie.nameRU}</h2>
        <p className="card__duration">{props.movie.duration}</p>
        <button
          type="submit"
          onClick={handleLikeClick}
          onSubmit={handleLikeSavedFilms}
          className={
            location.pathname === "/movies"
            ? cardLikeButtonClassName
            : "card__cross"}>
        </button>        
      </div>
      <img className="card__image" src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt="Кадр фильма" />  
    </section>        
  </>
  );
}

export default MoviesCard;
