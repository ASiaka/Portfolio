import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ModalNav from './ModalNav/ModalNav';

// import logo from './logo-ASia.png';
// import logo from './AS.svg';
import './nav.scss';
import { ThemeContext } from '../../contexts';

function Nav() {

  const [toggleMenuBurger, setToggleMenuBurger] = useState(true);

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;

  const mode = themeTools.mode;
  const handleModeChange = themeTools.handleModeChange;

  const themes = themeTools.themes;

  return (
    <div className="nav-container">
      <nav className="nav-content"
        id={mode ? handleModeChange() : "light"}
        style={{boxShadow: mode ? `${themeContext.theme} 1px 1px 1px 1px` : `gainsboro 1px 1px 1px 1px`}}
      >
        <div className="nav">
          {/* <a href="/"><img className="nav-logo" src={logo} alt="logo ASia" /></a> */}
          <a href="/">
            {/* <img className={`nav-logo ${logoTheme()}`} src={logo} alt="logo ASia"/> */}
            <svg
              // id="Calque_1"
              // xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 238.35 241.02"
              className="nav-logo"
              alt="logo ASia"
              >
              <path
                d="m227.79,123.17c-7.04-11.34-15.69-19.44-25.94-24.31s-25.17-8.99-44.75-12.37-33.07-8.16-40.46-14.34-11.08-13.69-11.08-22.5c0-9.51,4.44-18.7,13.31-27.57s21.33-13.31,37.36-13.31c28.98,0,49.19,17.92,60.64,53.77h8.07l-1.03-59.78h-7.04c-3.09,5.38-6.76,10.08-10.99,14.09C190.54,5.61,173.99,0,156.24,0c-21.19,0-37.97,6.84-50.33,20.53-8.92,9.87-14.61,20.72-17.1,32.53L0,241.02h21.15l29.55-62.42h35.61v57.09h6.01l16.15-14.43c17.64,13.17,35.33,19.76,53.08,19.76,21.76,0,40-7.5,54.72-22.5s22.08-33.79,22.08-56.35c0-14.66-3.52-27.66-10.57-39Zm-26.46,94.91c-11.97,9.45-25.11,14.17-39.43,14.17s-27.72-5.1-39.86-15.29c-10.63-8.92-19.2-21.71-25.7-38.37h36.07l-8.2-18.31H59.37l32.51-68.66-.08-1.46c1.62,3.96,3.69,7.77,6.2,11.45,7.1,10.36,15.63,17.64,25.6,21.82,9.96,4.18,24.25,7.85,42.86,10.99,18.61,3.15,32.07,8.88,40.37,17.18,8.3,8.3,12.45,18.52,12.45,30.66,0,14.43-5.98,26.37-17.95,35.82Z"
                fill={mode ? themes.gray : themeContext.theme}
              />
            </svg>
          </a>

          {!toggleMenuBurger && <ModalNav setToggleMenuBurger={setToggleMenuBurger} />}

          <ul className="nav-list" style={{color: mode ? themes.gray : themeContext.theme}}>
            <li className={mode ? "darkHover" : "light"}><NavLink to="/">Accueil</NavLink></li>
            {/* <li className={mode ? "darkHover" : "light"}><NavLink to="">A propos</NavLink></li> */}
            <li className={mode ? "darkHover" : "light"}><NavLink to="/parcours">Parcours</NavLink></li>
            <li className={mode ? "darkHover" : "light"}><NavLink to="/projets">Projets</NavLink></li>
            <li className={mode ? "darkHover" : "light"}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="nav-menu">
            <i
              className={toggleMenuBurger ? 'fa-solid fa-bars fa-1x' : 'fa-solid fa-xmark fa-1x'}
              onClick={() => {
                return (
                  toggleMenuBurger ? setToggleMenuBurger(false) : setToggleMenuBurger(true)
                );
              }}
              style={{color: mode ? themes.gray : themeContext.theme}}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
