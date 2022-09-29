import React from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Profile() { 
  
  const history = useHistory();
  
  return (
    <>
    <Header
      style={{ background: "#FFFFFF" }}
    /> 
    <section className="profile">
      <h2 className="profile__title">
        Привет, Алексей!
      </h2>
      <div className="profile__box">
        <div className="profile__container">        
          <p className="profile__label-name">Имя</p>
          <p className="profile__input">Алексей</p>
        </div>    
        <hr className="profile__line" />
        <div className="profile__container">
          <p className="profile__label-name">E-mail</p>
          <p className="profile__input">pochta@yandex.ru</p>          
        </div>
      </div>          
      <button className="profile__btn">
        Редактировать
      </button>
      <button className="profile__btn-exit" onClick={() => history.goBack()}>
        Выйти из аккаунта
      </button>           
    </section>
    </>
  );
}

export default Profile;
