import Proptypes from 'prop-types';
import './footer.scss';

function Footer({mode}) {
  console.log(mode);
  return (
    <div className="footer-container">
      <footer className={`footer-content ${mode}`}>
        <div className="icon">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/siakaandhum/"><i className="fa-brands fa-linkedin fa-2x"></i></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ASiaka"><i className="fa-brands fa-github fa-2x"></i></a>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  mode: Proptypes.string.isRequired,
}

export default Footer;