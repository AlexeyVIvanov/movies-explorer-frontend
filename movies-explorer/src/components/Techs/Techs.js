import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <hr className="techs__line" />
      <h3 className="techs__table-title">7 технологий</h3>
      <h4 className="techs__table-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h4>
      <ul className="techs__table">
        <li className="techs__cell">          
          <p className="techs__text">HTML</p>
        </li>
        <li className="techs__cell">          
          <p className="techs__text">CSS</p>
        </li>
        <li className="techs__cell">          
          <p className="techs__text">JS</p>
        </li>
        <li className="techs__cell">          
          <p className="techs__text">React</p>
        </li>
        <li className="techs__cell">          
          <p className="techs__text">Git</p>
        </li>
        <li className="techs__cell">          
          <p className="techs__text">Express.js</p>
        </li>
        <li className="techs__cell">          
          <p className="techs__text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
