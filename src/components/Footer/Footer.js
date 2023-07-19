import './footer.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

function Footer() {

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;

  return (

    <div className="footer-container">
      <footer className="footer-content" style={{backgroundColor: themeContext.theme}}>
        <div className="icon">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/siakaandhum/"><i className="fa-brands fa-linkedin fa-1x"></i></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ASiaka"><i className="fa-brands fa-github fa-1x"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;