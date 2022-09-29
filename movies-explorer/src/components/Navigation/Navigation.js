import React from 'react';

function Navigation(props) {
  return (
    <nav className="navigation__container">
      {props.children}
    </nav>
  );
}

export default Navigation;
