import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {

  const history = useHistory();

  return (
    <section className="notfound">
      <p className="notfound__title">404</p>
      <p className="notfound__subtitle">Страница не найдена</p>
      <button className="notfound__btn-exit" onClick={() => history.goBack()}>
        Назад
      </button>            
    </section>
  );
}

export default NotFound;
