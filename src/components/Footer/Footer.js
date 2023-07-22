import './footer.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

function Footer() {

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;

  const mode = themeTools.mode;
  const handleModeChange = themeTools.handleModeChange;

  return (

    <div className="footer-container">
      <footer className={`footer-content ${mode && "borderFooter"}`} style={{backgroundColor: themeContext.theme}}
        id={mode ? handleModeChange() : "light"}
      >
        <div className="icon">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/siakaandhum/"><i className="fa-brands fa-linkedin fa-1x"></i></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ASiaka"><i className="fa-brands fa-github fa-1x"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;