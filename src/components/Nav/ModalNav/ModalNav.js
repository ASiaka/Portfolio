import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './modalnav.scss';

function ModalNav({ setToggleMenuBurger }) {
  return (
    <div className="mobileNav">
      <ul className="modal-list">
        <li>
          <NavLink
            to="/"
            onClick={() => setToggleMenuBurger(true)}
          >
            Acceuil
          </NavLink>
        </li>
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
