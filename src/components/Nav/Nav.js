import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ModalNav from './ModalNav/ModalNav';

// import logo from './logo-ASia.png';
import logo from './AS.svg';
import './nav.scss';
import { ThemeContext } from '../../contexts';

function Nav() {

  const [toggleMenuBurger, setToggleMenuBurger] = useState(true);

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;

  const mode = themeTools.mode;
  const handleModeChange = themeTools.handleModeChange;

  function logoTheme() {
    if (themeContext.theme === "#0C2F40") {
      return "baseThemeLogo"
    }
    if (themeContext.theme === "#2F4558") {
      return "blueThemeLogo"
    }
    if (themeContext.theme === "#354E52") {
      return "greenThemeLogo"
    }
    if (themeContext.theme === "#7C4C53") {
      return "redThemeLogo"
    }
  }

  return (
    <div className="nav-container">
      <nav className="nav-content"
        id={mode ? handleModeChange() : "light"}
      >
        <div className="nav">
          {/* <a href="/"><img className="nav-logo" src={logo} alt="logo ASia" /></a> */}
          <a href="/">
            <img className={`nav-logo ${logoTheme()}`} src={logo} alt="logo ASia"/></a>

          {!toggleMenuBurger && <ModalNav setToggleMenuBurger={setToggleMenuBurger} />}

          <ul className="nav-list" style={{color: themeContext.theme}}>
            <li><NavLink to="/">Acceuil</NavLink></li>
            {/* <li><NavLink to="">A propos</NavLink></li> */}
            <li><NavLink to="/parcours">Parcours</NavLink></li>
            <li><NavLink to="/projets">Projets</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="nav-menu">
            <i
              className={toggleMenuBurger ? 'fa-solid fa-bars fa-1x' : 'fa-solid fa-xmark fa-1x'}
              onClick={() => {
                console.log('Menu cliqué');
                return (
                  toggleMenuBurger ? setToggleMenuBurger(false) : setToggleMenuBurger(true)
                );
              }}
              style={{color: themeContext.theme}}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
