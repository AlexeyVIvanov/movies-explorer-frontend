import React from 'react';

import Arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__container">
          <a
            className="portfolio__link" 
            href="https://github.com/AlexeyVIvanov/how-to-learn"
            target="_blank"
            rel="noreferrer"
            >
              Статичный сайт
              <img className="portfolio__link-icon" src={Arrow} alt="стрелка"/>
          </a>
        </li>
        <hr className="portfolio__line" />
        <li className="portfolio__container">
          <a
            className="portfolio__link" 
            href="https://github.com/AlexeyVIvanov/russian-travel"
            target="_blank"
            rel="noreferrer"
            >
              Адаптивный сайт
              <img className="portfolio__link-icon" src={Arrow} alt="стрелка"/>
          </a>
        </li>
        <hr className="portfolio__line" />
        <li className="portfolio__container">
          <a
            className="portfolio__link"
            href="https://github.com/AlexeyVIvanov/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
            >
              Одностраничное приложение
              <img className="portfolio__link-icon" src={Arrow} alt="стрелка"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
