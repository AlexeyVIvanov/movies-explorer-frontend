import React from 'react';

import Portfolio from '../Portfolio/Portfolio';
import Myphoto from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <hr className="student__line" />
      <div className="student__profile-container">
        <div className="student__profile">
          <h3 className="student__name">Алексей</h3>
          <h4 className="student__profession">Фронтенд-разработчик, лет - очень много</h4>
          <p className="student__description">Екатеринбург. Образование высшее. Опыта в программировании нет,
            но есть большое желание достичь успехов в IT-области. 
          </p>
          <p className="student__copyright">Github</p>
        </div>
        <img src={Myphoto} className="student__avatar" alt="Моё фото" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
