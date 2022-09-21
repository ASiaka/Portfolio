import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ModalNav from './ModalNav/ModalNav';

// import logo from './logo-ASia.png';
import logo from './AS.png';
import './nav.scss';

function Nav() {
  const [toggleMenuBurger, setToggleMenuBurger] = useState(true);
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <div className="nav">
          {/* <a href="/"><img className="nav-logo" src={logo} alt="logo ASia" /></a> */}
          <a href="/"><img className="nav-logo" src={logo} alt="logo ASia" /></a>

          {!toggleMenuBurger && <ModalNav setToggleMenuBurger={setToggleMenuBurger} />}

          <ul className="nav-list">
            <li><NavLink to="/">Acceuil</NavLink></li>
            <li><NavLink to="/parcours">Parcours</NavLink></li>
            <li><NavLink to="/projets">Projets</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="nav-menu">
            <i
              className={toggleMenuBurger ? 'fa-solid fa-bars fa-2x' : 'fa-solid fa-xmark fa-2x'}
              onClick={() => {
                console.log('Menu cliqué');
                return (
                  toggleMenuBurger ? setToggleMenuBurger(false) : setToggleMenuBurger(true)
                );
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
