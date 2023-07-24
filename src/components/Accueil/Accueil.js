import './accueil.scss';
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import sass from "../../assets/img/sass.svg";
import js from "../../assets/img/js.svg";
import react from "../../assets/img/react.svg";
import php from "../../assets/img/php.svg";
import symfony from "../../assets/img/symfony.svg";
import laravel from "../../assets/img/laravel.svg";
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts';

function Acceuil() {

  const [progress, setProgress] = useState();

    // THEMES
    const themeTools = useContext(ThemeContext);
    const themeContext = themeTools.themeContext;

    const mode = themeTools.mode;
  
    const themes = themeTools.themes;

  return (
    <main className="accueil-container">
      <div className="accueil-content">
        <div className="accueil-title">
          <h1 style={{color: mode ? themes.gray : themeContext.theme30}}>Développeur web</h1>
          <h2 style={{color: mode ? themes.gray : themeContext.theme30}}>Spécialisé <span>React</span></h2>
        </div>
        <div className="icon-language">
          <img src={html} alt="html" className="icons html"
            onMouseOver={() => {
              setProgress("progress progress_60")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={css} alt="css" className="icons css"
            onMouseOver={() => {
              setProgress("progress progress_50")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={sass} alt="sass" className="icons sass"
            onMouseOver={() => {
              setProgress("progress progress_40")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={js} alt="js" className="icons js"
            onMouseOver={() => {
              setProgress("progress progress_60")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={react} alt="react" className="icons react"
            onMouseOver={() => {
              setProgress("progress progress_50")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={php} alt="php" className="icons php"
            onMouseOver={() => {
              setProgress("progress progress_40")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={symfony} alt="symfony" className="icons symfony"
            onMouseOver={() => {
              setProgress("progress progress_30")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
          <img src={laravel} alt="laravel" className="icons laravel"
            onMouseOver={() => {
              setProgress("progress progress_20")
            }}
            onMouseLeave={() => {
              setProgress("progress_0")
            }}
          />
        </div>
        <p className="slogan">DevIn<span>Progress</span></p>
        <div id="progress_bloc"><div className={progress} style={{backgroundColor: mode ? themes.gray : themeContext.theme30}}></div></div>
      </div>
    </main>
  );
}

export default Acceuil;
