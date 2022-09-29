import React from 'react';

import { Link } from "react-router-dom";
import Arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__links">
        <Link
          className="portfolio__link" 
          to="https://github.com/AlexeyVIvanov/how-to-learn"
          target="_blank"
          >
            Статичный сайт
            <img className="portfolio__link-icon" src={Arrow} alt="стрелка"/>
        </Link>
        <hr className="portfolio__line" />
        <Link
          className="portfolio__link" 
          to="https://github.com/AlexeyVIvanov/russian-travel"
          target="_blank"
          >
            Адаптивный сайт
            <img className="portfolio__link-icon" src={Arrow} alt="стрелка"/>
        </Link>
        <hr className="portfolio__line" />
        <Link
          className="portfolio__link"
          to="https://github.com/AlexeyVIvanov/react-mesto-api-full"
          target="_blank"
          >
            Одностраничное приложение
            <img className="portfolio__link-icon" src={Arrow} alt="стрелка"/>
        </Link>
      </nav>
    </section>
  );
}

export default Portfolio;
