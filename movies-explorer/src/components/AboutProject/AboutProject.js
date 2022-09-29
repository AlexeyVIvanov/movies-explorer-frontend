import React from 'react';

function AboutProject() {
  return (
    <section className="project">
      <h2 id="Project" className="project__title">О проекте</h2>
      <hr className="project__line" />
      <ul className="project__table">
        <li className="project__cell project__cell_middle">
          <h4 className="project__table-title">Дипломный проект включал 5 этапов</h4>
          <p className="project__table-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="project__cell project__cell_middle">
          <h4 className="project__table-title">На выполнение диплома ушло 5 недель</h4>
          <p className="project__table-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="project__grafic">
        <li className="project__cell project__cell_narrow">
          <p className="project__grafic-info project__grafic-info_green">1 неделя</p>
          <p className="project__grafic-signature">Back-end</p>
        </li>
        <li className="project__cell project__cell_wide">
          <p className="project__grafic-info project__grafic-info_grey">4 недели</p>
          <p className="project__grafic-signature">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
