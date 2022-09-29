import React from 'react';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main() {  

  return (
    <>
    <Header
      style={{ background: "#073042" }}
    /> 
    <main>    
      <Promo />    
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>    
    <Footer />      
    </>
  );
}

export default Main;
