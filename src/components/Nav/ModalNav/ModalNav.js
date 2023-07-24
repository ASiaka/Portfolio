import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './modalnav.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts';

function ModalNav({ setToggleMenuBurger }) {
  
  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;

  const mode = themeTools.mode;
  const handleModeChange = themeTools.handleModeChange;

  const themes = themeTools.themes;

  return (
    <div className="mobileNav"
      onMouseLeave={() => {setToggleMenuBurger(true)}}
      id={mode ? handleModeChange() : "light"}
    >
      <ul className="modal-list" style={{color: mode ? themes.gray : themeContext.theme}}>
        <li>
          <NavLink
            to="/"
            onClick={() => setToggleMenuBurger(true)}
          >
            Acceuil
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="#"
            onClick={() => setToggleMenuBurger(true)}
          >
            A propos
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/parcours"
            onClick={() => setToggleMenuBurger(true)}
          >
            Parcours
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projets"
            onClick={() => setToggleMenuBurger(true)}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setToggleMenuBurger(true)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

ModalNav.propTypes = {
  setToggleMenuBurger: PropTypes.func.isRequired,
};

export default ModalNav;
