import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
      Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <hr className="footer__line" />
      <div className="footer__container">
        <p className="footer__copyright-year">&copy; 2022</p>
        <div className="footer__container-copyright">
          <p className="footer__copyright">Яндекс.Практикум</p>
          <p className="footer__copyright">Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
